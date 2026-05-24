import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Slices/productSlice";
import wishlistReducer from "./Slices/wishlistSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    wishlist: wishlistReducer,
  },
});

export default store;