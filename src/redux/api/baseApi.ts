import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes: ["books", "borrow", "singleBook","borrowBook"],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_SERVER_URL,
  }),

  endpoints: (builder) => ({
    getbooks: builder.query({
      query: () => ({
        url: "/books",
        method: "GET",
      }),
      providesTags: ["books"],
    }),

    addBook: builder.mutation({
      query: (bookData) => ({
        url: "/books",
        method: "POST",
        body: bookData,
      }),
      invalidatesTags: ["books"],
    }),

    getSingleBook: builder.query({
      query: (id) => ({
        url: `/books/${id}`,
        method: "GET",
      }),
      providesTags: ["singleBook"],
    }),

    updateBook: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `/books/${id}`,
        body: updatedData,
        method: "PUT",
      }),
      invalidatesTags: ["books"],
    }),

    deleteBook: builder.mutation({
      query: (id) => ({
        url: `books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),

    addBorrowBook: builder.mutation({
      query: (data) => ({
        url: "/borrow",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["borrowBook","books"],
    }),

    getBorrowedBook: builder.query({
      query: () => ({
        url: "/borrow",
        method: "GET",
      }),
      providesTags:["borrowBook"]
    }),
  }),
});

export const {
  useGetbooksQuery,
  useAddBookMutation,
  useGetSingleBookQuery,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useAddBorrowBookMutation,
  useGetBorrowedBookQuery,
} = baseApi;
