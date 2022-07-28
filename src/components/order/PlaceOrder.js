import { MDBBtn, MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ONLINE_PAYMENT, PAY_ON_DELIVARY, STORE_ORDEERS_API } from "../../apis";
import axiosInstance from "../../features/auth/axios";
import { setCartId } from "../../features/cart/cartSlice";
import { getPaymentStatus, selectOrder, setCart, setOrder } from "../../features/order/orderSlice";
import { deleteCart } from "../cart/cartApiCalls";
import PlaceOrderTable from "./PlaceOrderTable";

const PlaceOrder = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const location = useLocation();
  const cart = location.state;
  const totalBill = location.state.total_price;

  const orderList=useSelector(selectOrder)
  const [onlinePayment, setOnlinePayment] = useState(false);
  const [payOnDelivary, setpayOnDelivary] = useState(false);
  const [displayOrderResponse, setDisplayOrderResponse] = useState(false);

  const paymentStatus = useSelector(getPaymentStatus);


  const onClickOnlinePayment = () => {
    setpayOnDelivary(false);
    setOnlinePayment(true);
  };
  const onClickPayOnDelivary = () => {
    setpayOnDelivary(true);
    setOnlinePayment(false);
  };

  const placeOrderHandler = async (paymentMethod, cartId) => {
    if (paymentMethod === PAY_ON_DELIVARY) {
      await axiosInstance
        .post(STORE_ORDEERS_API, {
          cart_id: cartId,
        })
        .then((response) => {
          
          dispatch(setOrder(response.data))
          dispatch(setCartId())
          console.log(orderList)
          toast.success('Order plcaed successfully !')
          setDisplayOrderResponse(true)

          return response.data;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };


  const onClickPlcaeOrder = () => {

    const data = placeOrderHandler(PAY_ON_DELIVARY, cart.id);
  };

  return (
    <div className="container">
      <div className="row justify-content-center ms-1 me-1">
        <MDBCard className="mt-4 col-xl-10">
          <MDBCardBody>
            <p className="note note-primary">
              <strong>Note: </strong>
              Do not close this window.Order is progressing....
            </p>

            <table className="table table-striped">
              <thead>
                <tr>
                  <th>CART ID</th>
                  <th>TOTAL BILL AMOUNT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{cart.id}</td>
                  <td>
                    <strong> ₹ {cart.total_price}</strong>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="ms-1 mt-1 fs-5">
              <p className="fs-6 ms-1 fw-bold text-dark">
                Select a payment option
              </p>
              <MDBBtn
                outline={!onlinePayment}
                className="me-1 mt-1"
                onClick={onClickOnlinePayment}
                // disabled={onlinePayment}
              >
                Online payment
              </MDBBtn>
              <MDBBtn
                outline={!payOnDelivary}
                className="ms-1 mt-1"
                onClick={onClickPayOnDelivary}
                // disabled={payOnDelivary}
              >
                Pay on delivary
              </MDBBtn>
            </div>


            {onlinePayment && (
              <div className="mt-4 ms-1 form-control">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>PAYMENT METHOD</th>
                      <th>PAYMENT STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Online</td>
                      <td>{paymentStatus}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            {payOnDelivary && (
              <>
                <div className="mt-4 ms-1 form-control">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>PAYMENT METHOD</th>
                        <th>PAYMENT STATUS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Pay on delivary</td>
                        <td>Pending</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          <MDBBtn rounded outline onClick={onClickPlcaeOrder}>
                            Plcae order
                          </MDBBtn>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {displayOrderResponse && (
                  <PlaceOrderTable orderList={orderList}/>
                )}
              </>
            )}
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  );
};

export default PlaceOrder;
