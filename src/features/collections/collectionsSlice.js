import { apiSlice } from "../api/apiSlice";


export const extendCollectionApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getCollections: builder.query({
            query: () => '/store/collections',
            providesTags: ['collection']
        })
    })
})

export const { useGetCollectionsQuery } = extendCollectionApiSlice