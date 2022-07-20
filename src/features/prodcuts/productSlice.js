import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { FAILED, LOADING, STORE_PRODUCTS_API, SUCCESS } from '../../apis';


const initialState = {

    products: [],
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    nextPage: STORE_PRODUCTS_API,
    previousPage: STORE_PRODUCTS_API,
    paginationNum: 1,


}

export const fetchProducts = createAsyncThunk("products/fetchProducts", async (page = STORE_PRODUCTS_API) => {
    const response = await axios.get(page.page)
    console.log("fetch slice response products", response)
    return response.data
})



const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        incrementPaginationNum: (state, action) => {
            state.paginationNum += 1;

        },
        decrementPaginationNum: (state, action) => {
            state.paginationNum -= 1;

        },
        setPaginationNumber: (state, action) => {
            state.paginationNum = action.payload
        }

    },
    extraReducers(builder) {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = LOADING
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = SUCCESS
                state.products = action.payload
                state.nextPage = action.payload.next
                state.previousPage = action.payload.previous

            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = FAILED
                state.error = action.error.message
            })
    }
});

export const { incrementPaginationNum, decrementPaginationNum, setPaginationNumber } = productSlice.actions

export const selectAllProducts = (state) => state.products.products;
export const getProductsStatus = (state) => state.products.status;
export const getProductsError = (state) => state.products.error;

export const selectPaginationNum = (state) => state.products.paginationNum;


export const getNextProductPageLink = (state) => state.products.nextPage;
export const getPreviousProductPageLink = (state) => state.products.previousPage;

export default productSlice.reducer