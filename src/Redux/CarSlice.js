import { createSlice } from "@reduxjs/toolkit";

export const CarSlice = createSlice({
  name: "counter",
  initialState: {
    CartCar: [],
  },
  reducers: {
    AddCarToCart: (state, action) => {
      let isexist = false;
      state.CartCar.forEach((el) => {
        if (el.id === action.payload.id) {
          el.qty++;
          isexist = true;
        }
      });
      if (!isexist) {
        state.CartCar.push(action.payload);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { AddCarToCart } = CarSlice.actions;

export default CarSlice.reducer;
