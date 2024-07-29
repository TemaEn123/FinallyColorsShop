import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

import { IColor, IColorWithCount } from "../../interfaces/interfaces";

interface IInitialState {
  cart: IColorWithCount[];
}

const initialState: IInitialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addColor: (state, action: PayloadAction<IColor>) => {
      const colorIndex = state.cart.findIndex(
        (color) => color.id === action.payload.id
      );

      if (colorIndex >= 0) {
        state.cart[colorIndex].count += 1;
      } else {
        state.cart.push({ ...action.payload, count: 1 });
      }
    },
    deleteColor: (state, action: PayloadAction<string>) => {
      const colorIndex = state.cart.findIndex(
        (color) => color.id === action.payload
      );

      if (state.cart[colorIndex].count > 1) {
        state.cart[colorIndex].count -= 1;
      } else {
        state.cart = state.cart.filter((color) => color.id !== action.payload);
      }
    },
  },
});

export const { addColor, deleteColor } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart.cart;

export default cartSlice.reducer;
