import axios from "axios"
import { CART_ID, STORE_CARTS_API } from "../../apis"
import { toast } from 'react-toastify'
import CartToast from "../subComponents/Toast/CartToast"



export const addToCart = async (productId, quantity, cartId) => {

    await axios.post(`${STORE_CARTS_API}${cartId}/items/`, {
        product_id: productId,
        quantity: quantity
    })
        .then((response) => {
            console.log(response.data)
            toast(<CartToast msg="Added to cart" />, { hideProgressBar: true })
            return response.data
        })
        .catch((err) => {
            let msg = 'Not enough stock .'
            console.log(err)
            if (err.response.status === 400) {
                msg += err?.response?.data?.quantity
                toast.error(msg, { hideProgressBar: true })
            } else {
                toast.error(msg, { hideProgressBar: true })

            }

            return err

        })
}



export const deleteCart = async () => {


    if (localStorage.getItem(CART_ID)) {

        const cartId = JSON.parse(localStorage.getItem(CART_ID))

        await axios.delete(`${STORE_CARTS_API}${cartId}`)
            .then((response) => {
                console.log(response.data)
                localStorage.removeItem(CART_ID)
                toast.done('deleted')
                return response.data
            })
            .catch((err) => {
                console.log(err)

                toast.error("Can't delete")

                return err
            })
    }

}