import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3001/",
  credentials: "include",
});

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery,
  endpoints: () => ({}),
});
