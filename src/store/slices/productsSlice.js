import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const PRODUCT_LIST_PORT = "http://localhost:8080/product/";

const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  try {
    const dataProducts = axios.get(PRODUCT_LIST_PORT);
    return [dataProducts.data];
  } catch (error) {
    return error.message;
  }
});

const initialState = {
  loading: true,
  error: null,
  productData: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: {},
  },
});

export const { getProducts } = productsSlice.actions;

export default productsSlice.reducer;
