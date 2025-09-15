import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Store/Cart/Cartslice";
import modelReducer from "../Store/ModelToggler/ModelTogglerSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    modelTogger: modelReducer,
  },
});
