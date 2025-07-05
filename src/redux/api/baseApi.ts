import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["books", "book", "borrow"],
  endpoints: (build) => ({
    getBooks: build.query({
      query: (limit) => `/books?limit=${limit}`,
      providesTags: ["books"],
    }),
    getBookById: build.query({
      query: (id) => `/books/${id}`,
      providesTags: ["book"],
    }),
    createBook: build.mutation({
      query: (bookData) => ({
        url: "/books",
        method: "POST",
        body: bookData,
      }),
      invalidatesTags: ["books"],
    }),
    editBook: build.mutation({
      query: ({ id, bookData }) => ({
        url: `/books/edit-book/${id}`,
        method: "PUT",
        body: bookData,
      }),
      invalidatesTags: ["book", "books"],
    }),
    deleteBook: build.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["book", "books"],
    }),
    borrowBook: build.mutation({
      query: ({ id, borrowData }) => ({
        url: `/borrow/${id}`,
        method: "POST",
        body: borrowData,
      }),
      invalidatesTags: ["book", "books", "borrow"],
    }),
    getBorrowSummary: build.query({
      query: () => "/borrow",
      providesTags: ["borrow"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useCreateBookMutation,
  useGetBookByIdQuery,
  useEditBookMutation,
  useBorrowBookMutation,
  useGetBorrowSummaryQuery,
  useDeleteBookMutation,
} = baseApi;
