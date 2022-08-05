
import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit';
import { FAILED, LOADING, STORE_API, SUCCESS } from '../../apis';
import axiosInstance from './axios';

export const updateAddress = createAsyncThunk('address/update', async (customerID, formValues) => {

    const response = await axiosInstance.put(
        `${STORE_API}customers/${customerID}/address/1`,
        {
            street: formValues.street,
            city: formValues.city,
            postal: formValues.postal,
            house_no: formValues.house,
            land_mark: formValues.landmark,
            phone_no: formValues.phone_no

        }
    )
    console.log(response.data)
    return response.data

})


const initialState = {

    updateStatus: null,
    updateError: null,


}


const updateAddressThunk = createSlice({
    name: 'address',
    initialState,
    reducers: {
        resetUpdateAddressUpdateStatus: (state, action) => {
            state.updateStatus = null
            state.updateError = null
        }
    },
    extraReducers(builder) {
        builder
            .addCase(updateAddress.pending, (state, action) => {
                state.updateStatus = LOADING
            })
            .addCase(updateAddress.fulfilled, (state, action) => {
                state.updateStatus = SUCCESS
            })
            .addCase(updateAddress.rejected, (state, action) => {
                state.updateStatus = FAILED
                state.updateError = action.error
            })
    }
});

export const { resetUpdateAddressUpdateStatus } = updateAddressThunk.actions

export default updateAddressThunk.reducer