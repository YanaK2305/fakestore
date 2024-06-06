import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  product: { rating: { rate: "", count: "" } },
  loading: false,
  error: "",
};

export const fetchFullProduct = createAsyncThunk(
  "product/fetchProduct",
  (id) => {
    return axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((json) => json.data);
  }
);

export const fullProductSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchFullProduct.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchFullProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.product = action.payload;
    });
    builder.addCase(fetchFullProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.product = { rating: { rate: "", count: "" } };
    });
  },
});
export default fullProductSlice.reducer;
