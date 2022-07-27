import { MDBBtn } from 'mdb-react-ui-kit'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { selectCartId, setCartId } from '../../features/cart/cartSlice'
import { addToCart } from './cartApiCalls'
import { createCart } from '../../features/cart/cartSlice'

const AddToCartBtn = ({ id, quantity = 1 }) => {

    const dispatch = useDispatch()

    let cartId = useSelector(selectCartId)

    const addToCartHandler = async () => {

        // id=product_id
        if (cartId) {
            addToCart(id, quantity, cartId)
        }
        else {

            // cartId=await createCart()
            toast
                .info('No cart found!\n Creating cart...', { autoClose: 2000 })
            dispatch(createCart())

            


        }


    }


    return (
        <>
            <MDBBtn rounded outline className="me-4 mt-1 "
                onClick={addToCartHandler}
            >
                Add to cart
            </MDBBtn>
        </>
    )
}

export default AddToCartBtn