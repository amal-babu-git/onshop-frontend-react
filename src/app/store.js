import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/prodcuts/productSlice';
// import { apiSlice } from '../features/api/apiSlice';
import collectionsReducer from '../features/collections/collectionsSlice';
import authUserReducer from '../features/auth/authUserSlice';
import cartReducer from '../features/cart/cartSlice';

export const store = configureStore({
    reducer: {
        products: productReducer,
        collections: collectionsReducer,
        auth: authUserReducer,
        cart:cartReducer,
        // [apiSlice.reducerPath]: apiSlice.reducer

    },
    // middleware: getDefaultMiddleware =>
    //     getDefaultMiddleware().concat(apiSlice.middleware),
});
