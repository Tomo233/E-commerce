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
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseOrDecreaseQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload.id);
      item.quantity = action.payload.quantity;
      item.totalPrice = item.price * item.quantity;
    },
  },
});

export const getCartProducts = (state) => state.cart.cart;

export const getCurrentQuantity = (id) => (state) =>
  state.cart.cart.find((item) => item.id === id)?.quantity ?? 0;

export const getTotalPrice = (state) =>
  state.cart.cart.reduce((acc, cur) => acc + cur.totalPrice, 0);

export const { addToCart, removeFromCart, increaseOrDecreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
