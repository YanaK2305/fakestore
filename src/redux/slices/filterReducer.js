import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeFilter: "electronics",
  sort: "",
};
export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
});
export const { setActiveFilter, setSort } = filterSlice.actions;
export default filterSlice.reducer;
