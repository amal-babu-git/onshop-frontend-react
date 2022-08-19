
import { MDBBtn } from 'mdb-react-ui-kit';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useNavigate, useLocation } from 'react-router';
import { toast } from 'react-toastify';
import API from '../../apis';
import axiosInstance from '../../features/auth/axios'
import { setPaymentDetails } from '../../features/order/orderSlice';
import { selectCustomerInfo } from "../../features/auth/authUserSlice"
import upiIcon from "../../images/icons/icons8-bhim-16.png"


const PaymentR = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const totalAmount = location.state ?? 99
  const customerInfo = useSelector(selectCustomerInfo)
  const customerEmail = customerInfo.email ?? ""
  const customerphone = customerInfo.phone ?? ""
  const username = customerInfo.username ?? ""

  // const handlePaymentSuccess = async (response) => {
  //   try {
  //     let bodyData = new FormData();

  //     // we will send the response we've got from razorpay to the backend to validate the payment
  //     bodyData.append("response", JSON.stringify(response));

  //     await axiosInstance.post(
  //       `${API}payment/razorpay/payment_status/`, bodyData,

  //     )
  //       .then((res) => {
  //         console.log("Everything is OK!", res);
  //         settotalAmount("");
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } catch (error) {
  //     console.log(console.error());
  //   }
  // };
  // this will load a script tag which will open up Razorpay payment card to make //transactions
  const loadScript = async () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    document.body.appendChild(script);
  };

  const showRazorpay = async () => {
    const res = await loadScript();

    let bodyData = new FormData();

    // we will pass the totalAmount and product name to the backend using form data
    bodyData.append("amount", totalAmount.toString());

    const data = await axiosInstance({
      url: `${API}payment/razorpay/start_payment/`,
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: bodyData,
    }).then((res) => {
      console.log('response', res)
      return res;
    }).catch((err) => {

      console.log(err)
      toast.warn('Something went wrong!')

    });
    var options = {
      key_id: process.env.REACT_APP_PUBLIC_KEY, // in react your environment variable must start with REACT_APP_
      key_secret: process.env.REACT_APP_SECRET_KEY,
      totalAmount: data.data.payment.totalAmount,
      currency: "INR",
      name: "OnShop",
      description: "Online payment",
      image: "", // add image url
      order_id: data.data.payment.id,
      handler: (response) => {
        // we will handle success by calling handlePaymentSuccess method and
        // will pass the response that we've got from razorpay
        // handlePaymentSuccess(response);
        console.log(response)
        if (response.status_code === 200 || response.razorpay_order_id !==null) {
          toast.success("Payment success", { hideProgressBar: true });
          toast.info("You can place your order", { hideProgressBar: true });
          console.log("paymentSucess");
          const paymentResponseData = {
            transactionId:
              "pay_id=" +
              response.razorpay_payment_id +
              ",orderid=" +
              response.razorpay_order_id,
            totalAmount: totalAmount,
            paymentMethod: "ON",
            paymentStatus: "C",
          };
          dispatch(setPaymentDetails(paymentResponseData));
          console.log(paymentResponseData);
          navigate("/user/place-order/", { replace: true });
        } else {
          toast.error("Payment failed", { hideProgressBar: true });
        }
      },
      prefill: {
        name: username,
        email: customerEmail,
        contact: customerphone,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#1266F1",
      },
    };

    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <div className="ms-1 me-1">
      <MDBBtn outline onClick={showRazorpay} className="">
        Pay with razorpay | UPI <img src={upiIcon} alt='upi'/> | GPAY | PHONE PAY | PAYTM
      </MDBBtn>
    </div>
  );
}

export default PaymentR