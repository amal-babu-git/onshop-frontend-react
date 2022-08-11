import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { FAILED, LOADING, PENDING, STORE_ORDEERS_API, SUCCESS } from '../../apis';
import axiosInstance from "../auth/axios"

export const fetchOrdersHandler = createAsyncThunk('order/fetchOrders', async () => {
    const response = await axiosInstance.get(STORE_ORDEERS_API)
    console.log(response.data)
    return response.data
})

const initialState = {

    orders: [],
    order: [],
    ordersFetchStatus: '',
    ordersFetchError: '',

    paymentStatus: PENDING,
    paymentDetails:[] 


}

const orderSlice = createSlice({

    name: 'order',
    initialState,
    reducers: {
        setOrder: (state, action) => {
            state.order = action.payload
        },
        setpaymentStatus: (state, action) => {
            state.order = action.payload
        },
        setPaymentDetails: (state, action) => {
            state.paymentDetails = action.payload
        },
        resetPaymentDetails: (state, action) => {
            state.paymentDetails = []
        },

    },
    extraReducers(builder) {
        builder
            .addCase(fetchOrdersHandler.pending, (state, action) => {
                state.ordersFetchStatus = LOADING
            })
            .addCase(fetchOrdersHandler.fulfilled, (state, action) => {
                state.ordersFetchStatus = SUCCESS
                state.orders = action.payload

            })
            .addCase(fetchOrdersHandler.rejected, (state, action) => {
                state.ordersFetchStatus = FAILED
                state.ordersFetchError = action.error
            })
    }

});

export const { setOrder, setCart,setPaymentDetails,resetPaymentDetails } = orderSlice.actions

export const selectOrder = (state) => state.order.order
export const selectOrders = (state) => state.order.orders
export const selectPaymentDetails = (state) => state.order.paymentDetails

export const getPaymentStatus = (state) => state.order.paymentStatus
export const getPaymentError = (state) => state.order.ordersFetchError
export const getOrdersFetchStatus = (state) => state.order.ordersFetchStatus
export const getOrdersFetchError = (state) => state.order.ordersFetchError

export default orderSlice.reducer