import { toast } from "react-toastify"
import axiosInstance from "../../features/auth/axios"

export const getPaymentToken = async () => {

    return (
        await axiosInstance.get('payment/braintree/gettoken/')
            .then((response) => {
                console.log(response.data)
                return response.data
            })
            .catch((error) => {
                console.log(error)
                toast.error('token generation failed', { hideProgressBar: true })
            })
    )

}

export const processPayment = async ({ paymentData }) => {

    return (
        await axiosInstance.post('payment/braintree/process_payment/', { paymentData })
            .then((response) => {
                console.log(response.data)
                return response.data
            })
            .catch((error) => {
                console.log('paymentData',paymentData   )
                console.log(error)
                toast.error('Payment failed', { hideProgressBar: true })

            })
    )
}