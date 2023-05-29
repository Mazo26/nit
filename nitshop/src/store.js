import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./redux/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
