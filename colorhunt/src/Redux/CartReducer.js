import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { articleNo } = action.payload;

      // Check if the item already exists in the cart
      const existingItemIndex = state.cart.findIndex(
        (item) => item.articleNo === articleNo
      );

      if (existingItemIndex !== -1) {
        // If item already exists, replace it with the new one
        state.cart[existingItemIndex] = action.payload;
      } else {
        // If item doesn't exist, add it to the cart
        state.cart.push(action.payload);
      }
    },
    deleteFromCart: (state, action) => {
      const { articleNo } = action.payload;

      // Find the index of the item to delete
      const itemIndexToDelete = state.cart.findIndex(
        (item) => item.articleNo === articleNo
      );

      // Remove the item from the cart if found
      if (itemIndexToDelete !== -1) {
        state.cart.splice(itemIndexToDelete, 1);
      }
    },
    cleanCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, deleteFromCart, cleanCart } = CartSlice.actions;

export default CartSlice.reducer;
