import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
    },
    removeFromCart(state, action) {
      state.cart.filter((item) => item.id !== action.payload);
    },
    increaseOrDecreaseQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload.id);
      item.quantity = action.payload.quantity;
    },
  },
});

export const getCartProducts = (state) => state.cart.cart;

export const { addToCart, removeFromCart, increaseOrDecreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
