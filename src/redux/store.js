import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartReducer";
import filterReducer from "./slices/filterReducer";
import productsReducer from "./slices/productsReducer";
import fullProductReducer from "./slices/fullProductReducer";
const preloadedState = localStorage.getItem("redux")
  ? JSON.parse(localStorage.getItem("redux"))
  : {};
// создали константу для определения начального состояния хранилища
// если из localStorage удается получить сохраненные данные, то парсим и подставляем их
// иначе создаем пустое хранилище ввиде объекта
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    filter: filterReducer,
    products: productsReducer,
    product: fullProductReducer,
  },
  preloadedState,
});
store.subscribe(() => {
  localStorage.setItem("redux", JSON.stringify(store.getState()));
  // при каждом изменении хранилища все состояние сохраняется в localStorage
});
