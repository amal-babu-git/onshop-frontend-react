import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/prodcuts/productSlice';
import collectionReducer from '../features/collections/collectionsSlice';
import { apiSlice } from '../features/api/apiSlice';

export const store = configureStore({
    reducer: {
        products: productReducer,
        [apiSlice.reducerPath]: apiSlice.reducer

    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});
