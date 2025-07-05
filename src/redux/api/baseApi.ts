import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
  }),
  endpoints: (builder) => ({
    getbooks: builder.query({
      query: () => "/books",
    }),
  }),
});

export const { useGetbooksQuery } = baseApi;
