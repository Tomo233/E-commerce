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
      console.log(category);
      const res = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      const data = await res.json();
      if (!data.length) return;
      console.log(data);
      //   return data;
    } catch (error) {
      throw new Error("Error !");
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
        state.filteredProducts = action.payload; // Update state with fetched data
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export default ProductsSlice.reducer;
