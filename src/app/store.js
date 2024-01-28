import { configureStore } from "@reduxjs/toolkit";
import shopSliceReducer from "./shopSlice";

const store = configureStore({
  reducer: {
    shop: shopSliceReducer,
  },
});

export default store;
