import { configureStore } from "@reduxjs/toolkit";
import cartSlice from '../redux/cartSlice';

const store = configureStore({
    reducer: {
        cartItems: cartSlice
    }
})

export default store;