import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const codOrder = createAsyncThunk("order/codorder", async (orderData) => {
    const response = await axios.post("http://localhost:3000/api/order/codorder", orderData,{withCredentials:true});
    return response.data;
});

export const confirmOrder = createAsyncThunk("order/confirmorder", async (sessionid) => {
    const response = await axios.post("http://localhost:3000/api/order/confirmorder", sessionid,{withCredentials:true});
    return response.data;
});

const orderSlice = createSlice({
    name: "order",
    initialState: {
        orderLoading: false,
        error: null,
        order: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(confirmOrder.pending, (state) => {
            state.orderLoading = true;
            state.error = null;
        }).addCase(confirmOrder.fulfilled, (state, action) => {
            state.orderLoading = false;
            state.order = action.payload;
        }).addCase(confirmOrder.rejected, (state, action) => {
            state.orderLoading = false;
            state.error = action.error.message;
        }).addCase(codOrder.pending, (state) => {
            state.orderLoading = true;
            state.error = false;
        }).addCase(codOrder.fulfilled, (state, action) => {
            state.orderLoading = false;
            state.order = action.payload;
        }).addCase(codOrder.rejected, (state, action) => {
            state.orderLoading = false;
            state.error = action.error.message;
        })
    }
})

export default orderSlice.reducer;