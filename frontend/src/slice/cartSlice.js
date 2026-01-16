import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    addCart: (state, action) => {
      const { id, text, price } = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item) {
        item.qty++;
      } else {
        state.items.push({ id: id, text: text, price, qty: 1 });
      }

      state.total += action.payload.price;
    },
    removeCart: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);

      state.total -= item.price * item.qty;
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.qty >= 0) {
        item.qty += 1;
      }

      state.total += item.price;
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      console.log("item in cart: ", item);

      if (item && item.qty >= 0) {
        item.qty -= 1;
      }

      state.total -= item?.price;
    },
  },
});

export const { addCart, removeCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
