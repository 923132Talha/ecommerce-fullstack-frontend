import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productSlice.js";
import searchReducer from "./reducers/searchSlice.js";
import userReducer from "./reducers/userSlice.js";
import cartReducer from "./reducers/addtocartSlice.js"

export const store = configureStore({
    reducer: {
        products: productReducer,
        search: searchReducer,
        user: userReducer,
        cart:cartReducer
    },
});