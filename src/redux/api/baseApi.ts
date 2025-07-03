import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (build) => ({
    getBooks: build.query({
      query: () => "/books",
    }),
    getBookById: build.query({
      query: (id) => `/books/${id}`,
    }),
    createBook: build.mutation({
      query: (bookData) => ({
        url: "/books",
        method: "POST",
        body: bookData,
      }),
    }),
  }),
});

export const { useGetBooksQuery, useCreateBookMutation, useGetBookByIdQuery } = baseApi;
