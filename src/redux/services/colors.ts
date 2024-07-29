import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IColor } from "../../interfaces/interfaces";

const BASE_URL = import.meta.env.VITE_COLORS_BASE_URL;

export const colorsApi = createApi({
  reducerPath: "colorsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getColors: builder.query<IColor[], null>({
      query: () => ({
        url: "colors",
      }),
    }),
    getColorsById: builder.query<IColor, string>({
      query: (id) => ({
        url: `colors/${id}`,
      }),
    }),
  }),
});

export const { useGetColorsQuery, useGetColorsByIdQuery } = colorsApi;
