import { apiSlice } from "../../api/apiSlice";

const loginSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    Login: build.mutation({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
      }),
    }),
    Refresh: build.mutation({
      query: (body) => ({
        url: "/refresh",
        method: "POST",
      }),
    }),
    Logout: build.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
    }),
  }),
});

export const { useLoginMutation, useRefreshMutation, useLogoutMutation } =
  loginSlice;
