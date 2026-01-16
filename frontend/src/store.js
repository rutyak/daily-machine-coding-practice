import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice/todoSlice";
import cartReducer from "./slice/cartSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    cart: cartReducer,
  },
});

export default store;
