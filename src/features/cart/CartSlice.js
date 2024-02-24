import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("userCart")) || [], // Load from local storage initially
  totalPrice: 1,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
      localStorage.setItem("userCart", JSON.stringify(state.cart)); // Update local storage
    },
    removeFromCart(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      localStorage.setItem("userCart", JSON.stringify(state.cart)); // Update local storage
    },
    increaseOrDecreaseQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
        item.totalPrice = item.price * item.quantity;
        localStorage.setItem("userCart", JSON.stringify(state.cart)); // Update local storage
      }
    },
    setTotalPrice(state, action) {
      action.payload > 1000
        ? (state.totalPrice = action.payload + action.payload * 0.2)
        : (state.totalPrice = action.payload);
    },
  },
});

export const getCartProducts = (state) => state.cart.cart;

export const getCurrentQuantity = (id) => (state) =>
  state.cart.cart.find((item) => item.id === id)?.quantity ?? 0;

export const getSubTotalPrice = (state) =>
  state.cart.cart.reduce((acc, cur) => acc + cur.totalPrice, 0);

export const getTotalPrice = (state) => state.cart.totalPrice;

export const {
  addToCart,
  removeFromCart,
  increaseOrDecreaseQuantity,
  setTotalPrice,
} = cartSlice.actions;

export default cartSlice.reducer;
