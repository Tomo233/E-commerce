import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("userCart")) || [], // Load from local storage initially
  totalPrice: JSON.parse(localStorage.getItem("totalPrice")) || 0,
  coupons: ["A12T", "GT15", "TB05"],
  couponMessage: "",
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
      const price =
        action.payload > 1000
          ? action.payload + action.payload * 0.2
          : action.payload;
      state.totalPrice = price;
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice)); // Update local storage
    },
    applyCoupon(state, action) {
      const couponCode = state.coupons.find(
        (coupon) => action.payload.toLowerCase() === coupon.toLowerCase()
      );

      if (couponCode) {
        state.totalPrice = state.totalPrice - state.totalPrice * 0.1;
        state.couponMessage =
          "Great news! 🎉 Thanks to your coupon, you're enjoying a 10% discount on your total price. Your savings are applied at checkout. Happy shopping!";
      } else
        state.couponMessage =
          "Oops! It seems like the coupon code you entered is incorrect. Double-check the code and try again.";
    },
  },
});

export const getCartProducts = (state) => state.cart.cart;

export const getCurrentQuantity = (id) => (state) =>
  state.cart.cart.find((item) => item.id === id)?.quantity ?? 0;

export const getSubTotalPrice = (state) =>
  state.cart.cart.reduce((acc, cur) => acc + cur.totalPrice, 0);

export const getTotalPrice = (state) => state.cart.totalPrice;

export const getCouponMessage = (state) => state.cart.couponMessage;

export const {
  addToCart,
  removeFromCart,
  increaseOrDecreaseQuantity,
  setTotalPrice,
  applyCoupon,
} = cartSlice.actions;

export default cartSlice.reducer;
