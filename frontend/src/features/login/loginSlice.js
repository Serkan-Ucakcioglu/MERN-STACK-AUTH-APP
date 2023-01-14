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
  }),
});

export const { useLoginMutation } = loginSlice;
