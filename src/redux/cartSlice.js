/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import products from '../../products';

const initialState = {
    cart: [],
    products: products,
    totalPrice: 0,
    totalQuantity: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            //IF ITEM ALREADY EXIST, JUST INCREASE QUANTITY ELSE ADD TO CART
            const item = state.cart.findIndex(item => item.id === action.payload.id);
            if (item >= 0) {
                state.cart[item].quantity += 1
            } else {
                state.cart.push(action.payload)
            }
        },
        calculateCartTotal: (state) => {
            state.totalPrice = state.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
            state.totalQuantity = state.cart.reduce((acc, item) => acc + item.quantity, 0);
        },

        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },

        updateItemQuantity: (state, action) => {
            const { type, id } = action.payload;
            if (type == 'INCREASE') {
                state.cart = state.cart.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item;
                    }
                })
            } else {
                state.cart = state.cart.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item;
                    }
                })
            }
        }
    }
})
export const { addToCart, calculateCartTotal, removeFromCart, updateItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;