import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
    }),
    getSomeProducts: builder.query({
      query: (limit) => `products?limit=${limit}&sort=desc`,
    }),
    getCertainProduct: builder.query({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetSomeProductsQuery,
  useGetCertainProductQuery,
} = productsApi;
