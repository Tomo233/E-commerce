import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredProducts: [],
  priceFiltered: [],
  status: "idle",
  error: "",
};

export const fetchProductsCategory = createAsyncThunk(
  "products/fetchProductsCategory",
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
      console.log("");
      // console.error(`Error :( ${error}`);
      throw error;
    }
  }
);

const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterProductsByPrice(state, action) {
      state.priceFiltered = state.filteredProducts.filter(
        (product) => product.price <= action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsCategory.fulfilled, (state, action) => {
        state.status = "idle";
        state.filteredProducts = action.payload;
      })
      .addCase(fetchProductsCategory.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export const { filterProductsByPrice } = ProductsSlice.actions;

export default ProductsSlice.reducer;
