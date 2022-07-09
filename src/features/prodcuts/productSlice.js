import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { STORE_PRODUCTS_API } from '../../apis';


const initialState = {

    products: [],
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    next_page: STORE_PRODUCTS_API,
    previous_page: STORE_PRODUCTS_API,
   

}

export const fetchProducts = createAsyncThunk("products/fetchProducts", async (page = 1) => {

    const response = await axios.get(`${STORE_PRODUCTS_API}?page=${page}`)
    return response.data
})



const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.products = action.payload
                state.next_page = action.payload.next
                state.previous_page = action.payload.previous
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
    }
});

export const { incrementPagination, decrementPagination } = productSlice.actions

export const selectAllProducts = (state) => state.products.products;
export const getProductsStatus = (state) => state.products.status;
export const getProductsError = (state) => state.products.error;


export const getNextProductPageLink = (state) => state.products.next_page;

export default productSlice.reducer