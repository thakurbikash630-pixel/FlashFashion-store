import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },

  reducers: {
    addItemstoCart: (state, action) => {
      console.log(action.payload);
      state.value.push({
        category: action.payload.category,
        name: action.payload.name,
        price: action.payload.price,
        quantity: 1,
      });
    },

    removeItemsfromCart: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { addItemstoCart, removeItemsfromCart } = cartSlice.actions;

export default cartSlice.reducer;
