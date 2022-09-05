import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// FIXME: This file not required
export const apiSlice = createApi({
    reducerPath: 'api', // optional
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
    tagTypes: ['onshop'],
    endpoints: builder => ({})
})