import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { STORE_COLLECTIONS_API } from '../../apis';


const initialState = {

    collections: [],
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    currentCollectionId: null


}

export const fetchCollections = createAsyncThunk("collection/fetchCollections", async (page = STORE_COLLECTIONS_API) => {
    const response = await axios.get(page.page)
    console.log("fetch slice response collections", response)
    return response.data
})



const collectionsSlice = createSlice({
    name: "collections",
    initialState,
    reducers: {

        setCurrentCollectionId: (state, action) => {
            state.currentCollectionId = action.payload;
        }



    },
    extraReducers(builder) {
        builder
            .addCase(fetchCollections.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(fetchCollections.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.collections = action.payload

            })
            .addCase(fetchCollections.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
    }
});

export const { setCurrentCollectionId } = collectionsSlice.actions

export const selectAllCollections = (state) => state.collections.collections;
export const getCollectionsStatus = (state) => state.collections.status;
export const getCollectionsError = (state) => state.collections.error;

export const getCurrentCollectionId = (state) => state.collections.currentCollectionId;

export default collectionsSlice.reducer