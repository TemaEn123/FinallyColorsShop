import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  IChangeColor,
  IColor,
  IFilters,
  INewColor,
} from "../../interfaces/interfaces";

const BASE_URL = import.meta.env.VITE_COLORS_BASE_URL;

export const colorsApi = createApi({
  reducerPath: "colorsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["colors"],
  endpoints: (builder) => ({
    getColors: builder.query<IColor[], IFilters>({
      query: (filters) => ({
        url: "colors",
        params: filters,
      }),
      providesTags: () => ["colors"],
    }),
    getColorsById: builder.query<IColor, string>({
      query: (id) => ({
        url: `colors/${id}`,
      }),
    }),
    postColor: builder.mutation<INewColor, INewColor>({
      query: (newColor) => ({
        url: "colors",
        method: "POST",
        body: newColor,
      }),
      invalidatesTags: ["colors"],
    }),
    deleteColor: builder.mutation<any, string>({
      query: (id) => ({
        url: `colors/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["colors"],
    }),
    changeColor: builder.mutation<any, IChangeColor>({
      query: (changeColor) => ({
        url: `colors/${changeColor.id}`,
        method: "PUT",
        body: { title: changeColor.title, price: changeColor.price },
      }),
      invalidatesTags: ["colors"],
    }),
  }),
});

export const {
  useGetColorsQuery,
  useGetColorsByIdQuery,
  usePostColorMutation,
  useDeleteColorMutation,
  useChangeColorMutation,
} = colorsApi;
