import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

import { colorsApi } from "./services/colors";
import filtersSlice from "./slices/filtersSlice";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    filters: filtersSlice,
    cart: cartSlice,
    [colorsApi.reducerPath]: colorsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(colorsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
