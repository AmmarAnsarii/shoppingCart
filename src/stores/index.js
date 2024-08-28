import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart"
import cart from "./cart";4
import { addToCart } from "./cart";

export const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})