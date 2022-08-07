import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { FAILED, LOADING, STORE_PRODUCTS_API, SUCCESS } from '../../apis'

export const fetchReviewsHandler = createAsyncThunk('reviews/fetch', async ({ productId }) => {
    const response = await axios.get(`${STORE_PRODUCTS_API}${productId}/reviews/`)
    console.log(response.data)
    return response.data
})

const initialState = {

    reviews: [],
    reviewsFetchStatus: '',
    reviewsFetchError: '',

}

const reviewSlice = createSlice({
    name: 'review',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchReviewsHandler.pending, (state, action) => {
                state.reviewsFetchStatus = LOADING
            })
            .addCase(fetchReviewsHandler.fulfilled, (state, action) => {
                state.reviewsFetchStatus = SUCCESS
                state.reviews = action.payload

            })
            .addCase(fetchReviewsHandler.rejected, (state, action) => {
                state.reviewsFetchStatus = FAILED
                state.reviewsFetchError = action.error
            })
    }
});

export const { } = reviewSlice.actions

export const selectReviews = (state) => state.review.reviews
export const getReviewsFetchStatus = (state) => state.review.reviewsFetchStatus
export const getReviewsFetchError = (state) => state.review.rereviewsFetchError

export default reviewSlice.reducer