import { createSlice } from "@reduxjs/toolkit";

export const modelSlice = createSlice({
  name: "modelTogger",
  initialState: {
    value: false,
  },

  reducers: {
    toggleModel: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleModel } = modelSlice.actions;

export default modelSlice.reducer;
