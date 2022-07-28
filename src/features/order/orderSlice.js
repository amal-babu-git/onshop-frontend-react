import { createSlice } from '@reduxjs/toolkit'
import { PENDING } from '../../apis';

const initialState = {

    order:[],
    paymentStatus:PENDING,


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
        
    }

});

export const { setOrder,setCart } = orderSlice.actions

export const selectOrder = (state) => state.order.order
export const getPaymentStatus = (state) => state.order.paymentStatus

export default orderSlice.reducer