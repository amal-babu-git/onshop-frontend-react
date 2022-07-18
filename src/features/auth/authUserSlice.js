import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    accessToken: null,
    refreshToken: null,
    status: null,
    error: null,

    username: null,
    firstName: null,
    lastName: null,
    email: null,


}

const authUserSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

        setUserInfo: (state, action) => {
            const { username, firstName, lastName, email } = action.payload

            state.username = username
            state.firstName = firstName
            state.lastName = lastName
            state.email = email


        },
        setCredentials: (state, action) => {
            const { access, refresh } = action.payload
            state.accessToken = access
            state.refreshToken = refresh

        },

        logOut: (state, action) => {

            state.accessToken = null
            state.refreshToken = null
            state.username = null
            state.firstName = null
            state.lastName = null
            state.email = null
            localStorage.setItem('accessToken', JSON.stringify(''))
            localStorage.setItem('refreshToken', JSON.stringify(''))


        }

    },
    // extraReducers(builder) {
    //     builder
    //         .addCase(signIn.pending, (state, action) => {
    //             state.status = "loading"
    //         })
    //         .addCase(signIn.fulfilled, (state, action) => {
    //             state.status = "succeeded"
    //             state.accessToken = action.payload.access
    //             state.refreshToken = action.payload.refresh

    //             localStorage.setItem('accessToken', JSON.stringify(action.payload.access))
    //             localStorage.setItem('refreshToken', JSON.stringify(action.payload.refresh))

    //         })
    //         .addCase(signIn.rejected, (state, action) => {
    //             state.status = "failed"
    //             state.error = action.error.message
    //         })
    // }
});


export const { setCredentials, setUserInfo, logOut } = authUserSlice.actions


export const getSigninStatus = (state) => state.auth.status;
export const getSignInError = (state) => state.auth.error;

export const selectAccessToken = (state) => state.auth.accessToken;
export const selectRefreshToken = (state) => state.auth.refreshToken;
export const selectUsername = (state) => state.auth.username;
export const selectFirstName = (state) => state.auth.firstName;
export const selectLastName = (state) => state.auth.lastName;
export const selectEmail = (state) => state.auth.email;

export default authUserSlice.reducer