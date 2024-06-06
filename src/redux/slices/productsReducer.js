import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// ассинхронный redux

const initialState = {
  arr: [],
  loading: false,
  error: "",
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  (data) => {
    return axios
      .get(
        `https://fakestoreapi.com/products/category/${data.activeFilter}?sort=${data.sort}`
      )
      .then((json) => json.data);
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.arr = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.arr = [];
    });
  },
});
export default productsSlice.reducer;
