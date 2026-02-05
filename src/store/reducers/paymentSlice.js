import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createCheckoutSession = createAsyncThunk("payment/createcheckoutsession", async (orderData) => {
    const response = await axios.post("http://localhost:3000/api/payment/createcheckoutsession", orderData, { headers: { "Content-Type": "application/json" }, withCredentials: true });
    return response.data;
});

const paymentSlice = createSlice({
    name: "payment",
    initialState: {
        paymentLoading: false,
        error: null,
        sessionurl: null,
        sessionId: null,
    },
    reducers: {
        clearPaymentState: (state) => {
            state.paymentLoading = false;
            state.error = null;
            state.sessionurl = null;
            state.sessionId = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createCheckoutSession.pending, (state) => {
            state.paymentLoading = true;
            state.error = null;
        }).addCase(createCheckoutSession.fulfilled, (state, action) => {
            state.paymentLoading = false;
            state.sessionurl = action.payload.url;
            state.sessionId = action.payload.id
        }).addCase(createCheckoutSession.rejected, (state, action) => {
            state.paymentLoading = false;
            state.error = action.error.message;
        })
    }
});

export const { clearPaymentState } = paymentSlice.actions;
export default paymentSlice.reducer;