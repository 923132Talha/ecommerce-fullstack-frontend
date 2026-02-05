import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productSlice.js";
import searchReducer from "./reducers/searchSlice.js";
import userReducer from "./reducers/userSlice.js";
import cartReducer from "./reducers/addtocartSlice.js";
import paymentReducer from "./reducers/paymentSlice.js";
import orderReducer from "./reducers/orderSlice.js";

export const store = configureStore({
    reducer: {
        products: productReducer,
        search: searchReducer,
        user: userReducer,
        cart: cartReducer,
        payment: paymentReducer,
        order:orderReducer,
    },
});