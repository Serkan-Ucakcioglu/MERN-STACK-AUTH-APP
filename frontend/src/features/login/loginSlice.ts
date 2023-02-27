import { apiSlice } from "../../api/apiSlice";

export interface ILOGIN {
  username: String;
  password: Number;
}

const loginSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    Login: build.query({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
      }),
    }),
    Refresh: build.query({
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
  useLazyRefreshQuery,
  useLazyLogoutQuery,
  useLazyTestQuery,
} = loginSlice;
