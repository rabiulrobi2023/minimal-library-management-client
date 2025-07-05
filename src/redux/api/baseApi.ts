import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://basic-library-management-server.vercel.app/api",
  }),
  endpoints: (builder) => ({
    getbooks: builder.query({
      query: () => "/books",
    }),
  }),
});

export const { useGetbooksQuery } = baseApi;
