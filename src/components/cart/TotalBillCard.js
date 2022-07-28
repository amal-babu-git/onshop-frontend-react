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

    const order = {
        cartId: cart.id,
        paymentStatus: 'P',
        paymentMethod: 'POD',
        total_bill: cart.total_price

    }


    const onClickDelete = () => {
        deleteCart();
        dispatch(setCartId());
        dispatch(setCartFetchStatus());

        toast(<DeleteToast />, { hideProgressBar: true });
        navigate("/products");
    };


    const onClickBuy = () => {


        navigate('/user/place-order', { state: cart })

    }



    return (
        <MDBCard>
            <MDBCardBody>
                

                <table className="table table-striped">
                    <thead>
                        <tr>
                            
                            <th>TOTAL BILL AMOUNT</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            
                            <td>
                                <strong> ₹ {cart.total_price}</strong>
                            </td>
                            
                        </tr>
                        <tr>
                            
                            <td>
                                <MDBBtn color="danger" className="ms-4" onClick={onClickDelete}>
                                    Delete Cart
                                </MDBBtn>
                                <MDBBtn className="ms-4" id='buy' name='buy'

                                    onClick={onClickBuy}

                                >
                                    Buy
                                </MDBBtn>
                                
                            </td>
                           
                        </tr>
                    </tbody>
                </table>
                
            </MDBCardBody>
        </MDBCard>
    )
}

export default TotalBillCard