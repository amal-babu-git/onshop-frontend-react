import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { CART_ID, FAILED, LOADING, STORE_CARTS_API, SUCCESS } from '../../apis';

export const fetchCartItems = createAsyncThunk('cart/fetchItems',
    async ({cartId}) => {
        const respone =await axios.get(`${STORE_CARTS_API}${cartId}/`)
        console.log('cart items', respone.data)
        return respone.data
    })



const initialState = {

    cartID: localStorage.getItem(CART_ID) ?
        JSON.parse(localStorage.getItem(CART_ID)) : null,
    cart: [],
    fetchStatus: null,
    fetchError: null,

}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCartFetchStatus: (state, action) => {
            state.fetchStatus = null
            state.fetchError = null

        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchCartItems.pending, (state, action) => {
                state.fetchStatus = LOADING
            })
            .addCase(fetchCartItems.fulfilled, (state, action) => {
                state.fetchStatus = SUCCESS
                state.cartID = action.payload.id
                state.cart = action.payload

            })
            .addCase(fetchCartItems.rejected, (state, action) => {
                state.fetchStatus = FAILED
                state.fetchError = action.error
            })
    }
});

export const { setCartFetchStatus } = cartSlice.actions

export const selectCart = (state) => state.cart.cart
export const selectCartId = (state) => state.cart.cartID

export const getCartFetchStatus = (state) => state.cart.fetchStatus
export const getCartFetchError = (state) => state.cart.fetchError

export default cartSlice.reducer