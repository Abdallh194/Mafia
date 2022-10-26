import { configureStore } from "@reduxjs/toolkit";
import CarSlice from "./CarSlice";

const Store = configureStore({
  reducer: {
    car: CarSlice,
  },
});
export default Store;
