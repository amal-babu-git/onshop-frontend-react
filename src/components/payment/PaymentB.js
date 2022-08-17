import React, { useEffect, useState } from "react";
import DropIn from "braintree-web-drop-in-react";
import { getPaymentToken, processPayment } from "./paymentHelper";
import { MDBBtn, MDBTypography } from 'mdb-react-ui-kit'
import CartSpinner from "../subComponents/customSpinners/CartSpinner"
import { toast } from 'react-toastify'
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setPaymentDetails } from "../../features/order/orderSlice";

const PaymentB = ({ totalAmount = 199 }) => {

    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location=useLocation()
    totalAmount=location.state



    const [info, setInfo] = useState({
        loading: false,
        success: false,
        clientToken: null,
        error: "",
        instance: {},
    });

    const getToken = () => {
        getPaymentToken().then((res) => {
            if (res.error) {
                console.log(res.err);
            } else {
                setInfo({ ...info, loading: false })
                const clientToken = res.client_token;
                setInfo({ clientToken: clientToken });
            }
        });
    };

    useEffect(() => {
        setInfo({ ...info, loading: true })
        getToken();
    }, []);

    // onclick payment button
    const onPayment = () => {
        setInfo({ ...info, loading: true })
        let nonce;
        console.log(info.instance)
        let getNonce = info.instance.requestPaymentMethod()
            .then((data) => {
                nonce = data.nonce
                console.log('nonce', nonce)
                const paymentData = {
                    paymentMethodNonce: nonce,
                    amount: totalAmount
                };
                processPayment({ paymentData })
                    .then(((response) => {
                        if (response.error) {
                            if (response.code == '1') {
                                toast.error('Payment failed', { hideProgressBar: true })
                                setInfo({ ...info, loading: false })
                                //payment failed
                            }
                        } else {
                            //no error all good!
                            setInfo({
                                ...info,
                                success: response.success,
                                loading: false
                            })
                            
                            toast.success('Payment success', { hideProgressBar: true })
                            toast.info('You can place your order', { hideProgressBar: true })
                            console.log('paymentSucess')
                            const paymentResponseData = {
                                transactionId: response.transaction.id,
                                amount: response.transaction.amount,
                                paymentMethod:'ON',
                                paymentStatus:'C',

                            }
                            dispatch(setPaymentDetails(paymentResponseData))
                            console.log(paymentResponseData)
                            navigate('/user/place-order/',{replace:true})
                        }
                    }))
            })
            .catch((err) => {
                console.log('err')
                console.log('nonceErr', err)
                toast.error('Payment failed', { hideProgressBar: true })
                setInfo({ ...info, loading: false })

            })
    }

    const ShowBtnDropin = () => {
        return (<div className="text-center">
            {
                info.clientToken !== null && (
                    <div>
                        <DropIn
                            options={{ authorization: info.clientToken }}
                            onInstance={(instance) => (info.instance = instance)}
                        >
                        </DropIn>
                        {<MDBBtn onClick={onPayment} disabled={info.loading} className="mt-1 mb-2 text-end">Confirm</MDBBtn>}
                    </div>
                )}
        </div>);
    };

    return (<div className="card ms-1 me-1">
        <div className="mt-2">
            <MDBTypography note noteColor='danger'>
                <strong>Please wait...</strong>
                Do not refresh or close this page.

            </MDBTypography>
            <p className="fs-5 fw-bold ms-2">Bill amount : ₹ {totalAmount}</p>
            <p>4009348888881881</p>
            <div className="text-center">
                {info.loading && <CartSpinner />}
            </div>
        </div>
        {ShowBtnDropin()}
    </div>);
};

export default PaymentB;
