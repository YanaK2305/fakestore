import { createSlice } from "@reduxjs/toolkit";
import { getFullPrice } from "../../utils/utils";

const initialState = {
  cartArr: [],
  fullPrice: 0,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      //  action.payload - параметры которые передаются при вызове функции из реакта,
      //   state - состояние хранилища(мы описываем его в initialState)
      const carrentItem = state.cartArr.find((elem) => item.id === elem.id);
      if (carrentItem) {
        state.cartArr = state.cartArr.map((item) => {
          if (item.id === carrentItem.id) {
            item.count++;
          }
          return item;
        });
      } else {
        state.cartArr.push({
          ...item,
          count: 1,
        });
      }
      getFullPrice(state);
    },
    clearCart: (state, action) => {
      if (window.confirm("Вы уверены, что хотите очистить корзину?")) {
        state.cartArr = [];
        getFullPrice(state);
      }
    },
    minusCartItem: (state, action) => {
      const item = action.payload;
      const carrentItem = state.cartArr.find((elem) => item.id === elem.id);
      if (carrentItem) {
        state.cartArr = state.cartArr.map((item) => {
          if (item.id === carrentItem.id) {
            item.count--;
          }
          return item;
        });
      }
      getFullPrice(state);
    },
    deleteCartItem: (state, action) => {
      const item = action.payload;
      if (window.confirm("Вы уверены, что хотите удалить товар из корзины?")) {
        const carrentItem = state.cartArr.find((elem) => item.id === elem.id);
        state.cartArr = state.cartArr.filter(
          (item) => item.id !== carrentItem.id
        );
        getFullPrice(state);
      }
    },
  },
});
export const { addToCart, clearCart, minusCartItem, deleteCartItem } =
  cartSlice.actions;
export default cartSlice.reducer;
