import { MDBBtn, MDBCard, MDBCardBody } from 'mdb-react-ui-kit'
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { setCartFetchStatus, setCartId } from '../../features/cart/cartSlice';
import DeleteToast from '../subComponents/Toast/DeleteToast';
import { deleteCart } from './cartApiCalls';

const TotalBillCard = ({ cart }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const onClickDelete = () => {
        deleteCart();
        dispatch(setCartId());
        dispatch(setCartFetchStatus());

        toast(<DeleteToast />, { hideProgressBar: true });
        navigate("/products");
    };


    const onClickBuy = () => {

        navigate('/user/place-order')

    }



    return (
        <MDBCard>
            <MDBCardBody>
                <div className="ms-4">
                    <p className="fs-6 fw-bold mt-2">
                        Total Bill    : ₹ {cart.total_price}
                    </p>
                </div>
                <div className="">
                    <MDBBtn color="danger" className="ms-4" onClick={onClickDelete}>
                        Delete Cart
                    </MDBBtn>
                    <MDBBtn className="ms-4" id='buy' name='buy'

                        onClick={onClickBuy}

                    >
                        Buy
                    </MDBBtn>
                </div>
            </MDBCardBody>
        </MDBCard>
    )
}

export default TotalBillCard