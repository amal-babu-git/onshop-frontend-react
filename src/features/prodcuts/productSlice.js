import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
// import { STORE_PRODUCTS_API } from '../../apis';

const STORE_PRODUCTS_API = `http://127.0.0.1:8000/store/products/`

const initialState = {

    products: [],
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null

}

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const response = await axios.get(STORE_PRODUCTS_API)
    return response.data
})

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.products = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
    }
});

export const { } = productSlice.actions

export const selectAllProducts = (state) => state.products.products;
export const getProductsStatus = (state) => state.products.status;
export const getProductsError = (state) => state.products.error;

export default productSlice.reducer