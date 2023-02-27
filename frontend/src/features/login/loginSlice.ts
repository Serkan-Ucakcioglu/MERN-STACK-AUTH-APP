import { apiSlice } from "../../api/apiSlice";

export interface ILOGIN {
  username: String;
  password: string;
}

const loginSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    Login: build.query({
      query: (body: ILOGIN) => ({
        url: "/login",
        method: "POST",
        body,
      }),
    }),
    Refresh: build.mutation({
      query: () => ({
        url: "/refresh",
        method: "GET",
      }),
    }),
    Logout: build.query({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
    }),
    Test: build.query({
      query: () => ({
        url: "/test",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useLazyLoginQuery,
  useRefreshMutation,
  useLazyLogoutQuery,
  useLazyTestQuery,
} = loginSlice;
