import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

/* ================================
   1. FETCH PRODUCTS (API CALL)
================================ */
export const fetchProduct = createAsyncThunk(
  "products/fetchProduct",
  async () => {
    // call API
    const result = await axios.get("https://dummyjson.com/products");

    // store in localStorage 
    localStorage.setItem(
      "dummyproducts",
      JSON.stringify(result.data.products)
    );

    // return products → goes to action.payload
    return result.data.products;
  }
);

/* ================================
   2. CREATE SLICE
================================ */
const productSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,     // for spinner
    products: [],       // products shown in UI
    allProducts: [],    // backup (original full list)
    error: "",
  },

  /* ===== NORMAL REDUCERS ===== */
  reducers: {
    // search functionality
    searchProduct: (state, action) => {
      // filter from original list
      state.products = state.allProducts.filter((item) =>item.title.toLowerCase().includes(action.payload.toLowerCase())   
      );
    },
  },

  /* ===== ASYNC REDUCERS (API) ===== */
  extraReducers: (builder) => {
    // when API starts
    builder.addCase(fetchProduct.pending, (state) => {
      state.loading = true;
      state.products = [];
      state.allProducts = [];
      state.error = "";
    });

    // when API success
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.loading = false;

      // store data in both
      state.products = action.payload;
      state.allProducts = action.payload;

      state.error = "";
    });

    // when API fails
    builder.addCase(fetchProduct.rejected, (state) => {
      state.loading = false;
      state.products = [];
      state.allProducts = [];
      state.error = "API failed";
    });
  },
});

/* ===== EXPORT ===== */
export const { searchProduct } = productSlice.actions;
export default productSlice.reducer;