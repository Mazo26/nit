import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./redux/counterSlice";
import cartReducer from "./redux/cartSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
  },
});
