import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { LOADING, SUCCESS, FAILED, API } from "../../apis"
import jwt_decode from 'jwt-decode'
import axiosInstance from './axios';



export const signIn = createAsyncThunk('auth/signin', async ({ username, password }) => {
    const response = await axios.post(`${API}core/auth/token/`,
        { username: username, password: password },
        { headers: { 'Content-Type': 'application/json' } })

    console.log(response.data)
    return response.data
})

export const fetchCustomerInfo = createAsyncThunk('auth/customerInfo', async () => {
    const response = await axiosInstance.get(`/store/customers/me`)
    console.log(response.data)
    return response.data
})

// export const refreshTokenHandler=createAsyncThunk('auth/refresh', async ({refreshToken}) =>{
//     const response =await axios.post(`${API}core/auth/token/refresh/`,
//     {refresh : refreshToken })


//     console.log(response.data)
//     return response.data
// })


const initialState = {

    accessToken: localStorage.getItem('accessToken') ? JSON.parse(localStorage.getItem('accessToken')) : null,
    refreshToken: localStorage.getItem('refreshToken') ? JSON.parse(localStorage.getItem('refreshToken')) : null,
    signInStatus: null,
    signInError: null,
    customerInfoStatus: null,
    customerInfoError: null,

    username: localStorage.getItem('accessToken') ? jwt_decode(JSON.parse(localStorage.getItem('accessToken'))).username : null,
    customerInfo: [],
    userInfo: [],

}

const authUserSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

        setCustomerInfo: (state, action) => {

            state.customerInfo = action.payload
            state.username = action.payload.username


        },
        setCredentials: (state, action) => {
            const { access, refresh } = action.payload
            state.accessToken = access
            state.refreshToken = refresh

        },

        logOut: (state, action) => {
            state.customerInfo = null
            state.username = null
            state.accessToken = null
            state.refreshToken = null
            state.signInStatus = null
            state.signInError = null

            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')


        }

    },
    extraReducers(builder) {
        builder
            .addCase(signIn.pending, (state, action) => {
                state.signInStatus = LOADING
            })
            .addCase(signIn.fulfilled, (state, action) => {
                //const { access, refresh, username } = action.payload
                state.signInStatus = SUCCESS
                state.accessToken = action.payload.access
                state.refreshToken = action.payload.refresh
                state.username = jwt_decode(action.payload.access).username


                localStorage.setItem('accessToken', JSON.stringify(action.payload.access))
                localStorage.setItem('refreshToken', JSON.stringify(action.payload.refresh))

            })
            .addCase(signIn.rejected, (state, action) => {
                state.signInStatus = FAILED
                state.signInError = action.error.message
            })

            // customer info fetching
            .addCase(fetchCustomerInfo.pending, (state, action) => {
                state.customerInfoStatus = LOADING
            })
            .addCase(fetchCustomerInfo.fulfilled, (state, action) => {
                //const { access, refresh, username } = action.payload
                state.customerInfoStatus = SUCCESS
                state.customerInfo = action.payload

            })
            .addCase(fetchCustomerInfo.rejected, (state, action) => {
                state.customerInfoStatus = FAILED
                state.customerInfoError = action.error.message
            })
    }
    
});


export const { setCredentials, setCustomerInfo, logOut } = authUserSlice.actions


export const getSigninSignInStatus = (state) => state.auth.signInStatus;
export const getSignInsignInError = (state) => state.auth.signInError;
export const getCustomerInfoStatus = (state) => state.auth.customerInfoStatus;
export const getCustomerInfoError = (state) => state.auth.customerInfoError;

export const selectAccessToken = (state) => state.auth.accessToken;
export const selectRefreshToken = (state) => state.auth.refreshToken;
export const selectUsername = (state) => state.auth.username;
export const selectCustomerInfo = (state) => state.auth.customerInfo;
export default authUserSlice.reducer