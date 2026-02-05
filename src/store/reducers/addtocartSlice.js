import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCart = createAsyncThunk("cart/getcart", async () => {
    const response = await axios.get(`http://localhost:3000/api/cart`, { withCredentials: true });
    return response.data;
});

export const addToCart = createAsyncThunk("cart/addtocart", async ({ productId, quantity }, { rejectWithValue }) => {
    try {
        const response = await axios.post(`http://localhost:3000/api/cart/add`, { productId, quantity }, { headers: { "Content-Type": "application/json" }, withCredentials: true });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response ? error.response.data : "Something went wrong!");
    }
});

export const deletefromCart = createAsyncThunk("cart/deletefromcart", async (productId) => {
    const response = await axios.delete(`http://localhost:3000/api/cart/delete`,
        {
            data: { productId },
            headers: { "Content-Type": "application/json" },
            withCredentials: true
        });
    return response.data;
});

export const clearCart = createAsyncThunk("cart/clearcart", async () => {
    const response = await axios.delete("http://localhost:3000/api/cart/clearcart", { withCredentials: true });
    return response.data;
})

const cartSlice = createSlice(
    {
        name: "cart",
        initialState: {
            items: [],
            cartLoading: false,
            error: null
        },
        reducers: {},
        extraReducers: (builder) => {
            builder.addCase(getCart.pending, (state) => {
                state.cartLoading = true;
            }).addCase(getCart.fulfilled, (state, action) => {
                state.cartLoading = false;
                state.items = action.payload;
            }).addCase(getCart.rejected, (state, action) => {
                state.cartLoading = false;
                state.error = action.error.message;
            }).addCase(addToCart.pending, (state) => {
                state.cartLoading = true;
            }).addCase(addToCart.fulfilled, (state, action) => {
                state.cartLoading = false;
                state.items = action.payload;
            }).addCase(addToCart.rejected, (state, action) => {
                state.cartLoading = false;
                state.error = action.error.message;
            }).addCase(deletefromCart.pending, (state) => {
                state.cartLoading = true;
            }).addCase(deletefromCart.fulfilled, (state, action) => {
                state.cartLoading = false;
                state.items = action.payload;
            }).addCase(deletefromCart.rejected, (state, action) => {
                state.cartLoading = false;
                state.error = action.error.message;
            }).addCase(clearCart.pending,(state)=>{
                state.cartLoading=true;
                state.error=null;
            }).addCase(clearCart.fulfilled,(state)=>{
                state.cartLoading=false;
                state.items=[];
            }).addCase(clearCart.rejected,(state,action)=>{
                state.cartLoading=false;
                state.error=action.error.message;
            })
        }
    }
);

export default cartSlice.reducer;
