import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IChangeFiltersObj, IFilters } from "../../interfaces/interfaces";
import { RootState } from "../store";
import { PAGE_LIMIT } from "../../constants/constants";

interface IInitialState {
  filters: IFilters;
}

const initialState: IInitialState = {
  filters: {
    title: "",
    p: 1,
    l: PAGE_LIMIT,
    sortBy: "",
    order: "asc",
  },
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilters: (state, action: PayloadAction<IChangeFiltersObj>) => {
      state.filters = {
        ...state.filters,
        [action.payload.key]: action.payload.value,
      };
    },
  },
});

export const { changeFilters } = filtersSlice.actions;

export const selectFilters = (state: RootState) => state.filters.filters;

export default filtersSlice.reducer;
