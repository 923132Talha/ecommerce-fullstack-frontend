import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch all products
export const getAllProducts = createAsyncThunk("products/getproducts", async () => {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/products`);
    return response.data;
});

// Fetch a single product
export const getSingleProduct = createAsyncThunk("products/getsingleproduct", async (id) => {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/products/${id}`);
    return response.data;
});

// Create a product (including image upload)
export const createProduct = createAsyncThunk('products/createProduct', async (formData) => {
    const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/products`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        withCredentials:true
    });
    return response.data;
});

// Update a product
export const updateProduct = createAsyncThunk("products/updateproduct", async ({ productId, updatedProduct }) => {
    const response = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/products/${productId}`, updatedProduct); // Use PUT for update
    return response.data;
});

// Delete a product
export const deleteProduct = createAsyncThunk("products/deleteproduct", async (productId) => {
    const response = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/products/${productId}`); // Use DELETE for product removal
    return { id: productId };
});

const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        product: {},
        loading: false,
        singleLoading: false,
        error: null,
        singleError: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // getAllProducts
            .addCase(getAllProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            // getSingleProduct
            .addCase(getSingleProduct.pending, (state) => {
                state.singleLoading = true;
            })
            .addCase(getSingleProduct.fulfilled, (state, action) => {
                state.singleLoading = false;
                state.product = action.payload;
            })
            .addCase(getSingleProduct.rejected, (state, action) => {
                state.singleLoading = false;
                state.error = action.error.message;
            })

            // createProduct
            .addCase(createProduct.pending, (state) => {
                state.loading = true;
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.products.push(action.payload); // Add newly created product to the list
            })
            .addCase(createProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            // updateProduct
            .addCase(updateProduct.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                state.loading = false;
                const updatedProduct = action.payload;
                state.products = state.products.map(product =>
                    product._id === updatedProduct._id ? updatedProduct : product
                );
            })
            .addCase(updateProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || action.payload;
            })

            // deleteProduct
            .addCase(deleteProduct.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.products = state.products.filter(product => product._id !== action.payload.id); // Remove the deleted product
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || action.payload;
            });
    }
});

export default productSlice.reducer;
