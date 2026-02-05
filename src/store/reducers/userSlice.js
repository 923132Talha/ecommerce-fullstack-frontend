import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk("user/getuser", async () => {
    const response = await axios.get(`http://localhost:3000/api/user`);
    return response.data;
});

// Check if the user is authenticated
export const checkUser = createAsyncThunk("user/auth", async () => {
    const response = await axios.get(`http://localhost:3000/api/user/check`, { withCredentials: true });
    return response.data;
});

// Register user
export const registerUser = createAsyncThunk("user/register", async (userData, { rejectWithValue }) => {
    try {
        const response = await axios.post(`http://localhost:3000/api/user/signup`, userData, { withCredentials: true });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.msg || "Registration failed"); // Handling error message
    }
});

// Login user
export const loginUser = createAsyncThunk("user/login", async (userData, { rejectWithValue }) => {
    try {
        const response = await axios.post(`http://localhost:3000/api/user/login`, userData, { withCredentials: true });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.msg || "Login failed"); // Handling error message
    }
});

// Logout user
export const logoutUser = createAsyncThunk("user/logout", async () => {
    const response = await axios.post(`http://localhost:3000/api/user/logout`, {}, { withCredentials: true });
    return response.data;
});

const userSlice = createSlice({
    name: "user",
    initialState: {
        isAuthenticated: false,
        loading: false,
        error: null,
        user: null,
        userList: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(getUser.fulfilled, (state, action) => {
            state.loading = false;
            state.userList = action.payload;
        }).addCase(getUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
            // Check User
            .addCase(checkUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(checkUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.isAuthenticated = true;
            })
            .addCase(checkUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Authentication check failed"; // Default error message
                state.isAuthenticated = false;
                state.user = null;
            })
            // Register User
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.isAuthenticated = true;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; // Error message from server response
            })
            // Login User
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.isAuthenticated = true;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; // Error message from server response
            })
            // Logout User
            .addCase(logoutUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.loading = false;
                state.user = null;
                state.isAuthenticated = false;
                state.error = null; // Clear error after logout
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Logout failed"; // Default error message for logout
            });
    },
});

export default userSlice.reducer;
