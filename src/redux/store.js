import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/wishlistSlice"
import productReducer from "./slices/productSlice"

const store = configureStore({
  reducer: {
    product: productReducer,
    wishlist: wishlistReducer,
  },
});

export default store;