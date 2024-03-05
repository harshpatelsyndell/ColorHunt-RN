import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Redux/CartReducer";
import wishlistReducer from "./Redux/wishlistReducer";

export default configureStore({
  reducer: {
    cart: CartReducer,
    wishlist: wishlistReducer,
  },
});
