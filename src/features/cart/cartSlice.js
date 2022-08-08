import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { CART_ID, FAILED, LOADING, STORE_CARTS_API, SUCCESS } from '../../apis';

export const fetchCartItems = createAsyncThunk('cart/fetchItems',
    async ({ cartId }) => {
        const respone = await axios.get(`${STORE_CARTS_API}${cartId}/`)
        console.log('cart items', respone.data)
        return respone.data
    })

export const createCart = createAsyncThunk('cart/create', async () => {

    const response = await axios.post(STORE_CARTS_API, {})
    console.log(response.data)
    return response.data

})



const initialState = {

    cartID: localStorage.getItem(CART_ID) ?
        JSON.parse(localStorage.getItem(CART_ID)) : null,
    cart: [],
    fetchStatus: null,
    fetchError: null,

    createStatus: null,
    createError: null,

}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCartFetchStatus: (state, action) => {
            state.fetchStatus = null
            state.fetchError = null

        },
        //set cart id null FIXME: this name is consufing change later, its now a braking change!
        setCartId: (state, action) => {
            state.cartID = null
        },
        setCartCreateStatus: (state, action) => {
            state.createStatus = null
            state.createError = null
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

            // Create cart
            .addCase(createCart.pending, (state, action) => {
                state.createStatus = LOADING
            })
            .addCase(createCart.fulfilled, (state, action) => {
                state.createStatus = SUCCESS
                state.cartID = action.payload.id

                localStorage.setItem(CART_ID, JSON.stringify(action.payload.id))

            })
            .addCase(createCart.rejected, (state, action) => {
                state.createStatus = FAILED
                state.createError = action.error
            })
    }
});

export const { setCartFetchStatus, setCartId, setCartCreateStatus } = cartSlice.actions

export const selectCart = (state) => state.cart.cart
export const selectCartId = (state) => state.cart.cartID

export const getCartFetchStatus = (state) => state.cart.fetchStatus
export const getCartFetchError = (state) => state.cart.fetchError
export const getCartCreateStatus = (state) => state.cart.createStatus
export const getCartCreateError = (state) => state.cart.createError

export default cartSlice.reducer