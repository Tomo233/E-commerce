import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filteredProducts: [],
  status: "idle",
  error: "",
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async function (category) {
    try {
      if (category === "all categories") return;
      const res = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      const data = await res.json();
      if (!data) return;
      return data;
    } catch (error) {
      console.error(`Error :( ${error}`);
      throw error;
    }
  }
);

const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "idle";
        state.filteredProducts = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export default ProductsSlice.reducer;
