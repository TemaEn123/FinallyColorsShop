import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

import { colorsApi } from "./services/colors";
import filtersSlice from "./slices/filtersSlice";
import cartSlice from "./slices/cartSlice";
import userSlice from "./slices/userSlice";

import storage from "redux-persist/lib/storage";

import {
  persistStore,
  persistReducer,
  WebStorage,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

interface IPersistConfig {
  key: string;
  storage: WebStorage;
  blacklist?: string[];
}

const rootPersistConfig: IPersistConfig = {
  key: "root",
  storage,
  blacklist: ["filters"],
};

const filtersPersistConfig: IPersistConfig = {
  key: "filters",
  storage,
  blacklist: ["filters"],
};

const rootReducer = combineReducers({
  user: userSlice,
  cart: cartSlice,
  [colorsApi.reducerPath]: colorsApi.reducer,
  filters: persistReducer(filtersPersistConfig, filtersSlice),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(colorsApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
