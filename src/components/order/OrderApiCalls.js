
import { PAY_ON_DELIVARY, STORE_ORDEERS_API } from "../../apis"
import axiosInstance from "../../features/auth/axios"

export const PlaceOrderHandler = async (paymentMethod, cartId) => {

    if (paymentMethod === PAY_ON_DELIVARY) {

        await axiosInstance.post(STORE_ORDEERS_API, {
            cart_id: cartId
        })
            .then((response) => {
                console.log(response.data)
                return response.data
            })
            .catch((err) => {
                console.log(err)
            })
    }
}