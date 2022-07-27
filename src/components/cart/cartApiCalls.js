import axios from "axios"
import { CART_ID, STORE_CARTS_API } from "../../apis"
import {toast} from 'react-toastify'
import CartToast from "../subComponents/Toast/CartToast"


export const createCart = async () => {

    const response = await axios.post(STORE_CARTS_API, {})
        .then((response) => {
            console.log(response.data)
            return response.data

        })
        .then((data) => {

            localStorage.setItem(CART_ID, JSON.stringify(data.id))
            return data.id
        })
        .catch((err) => {

            console.log(err.data)
        })



}

export const addToCart = async (productId, quantity) => {

    const cartId = localStorage.getItem(CART_ID) ?
        JSON.parse(localStorage.getItem(CART_ID)) : null

    if (!cartId) {

        cartId = createCart()

    }

    const response = await axios.post(`${STORE_CARTS_API}${cartId}/items/`, {
        product_id: productId,
        quantity: quantity
    })
        .then((response) => {
            console.log(response.data)
            toast(<CartToast msg="Added to cart" />,{hideProgressBar:true})
            return response.data
        })
        .catch((err) => {
            console.log(err)
        })
}

