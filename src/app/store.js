import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/prodcuts/productSlice';

export const store = configureStore({
    reducer: {
        products: productReducer,

    },
});
