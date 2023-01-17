import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { addToken, removeToken } from "../features/authSlice";

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    // try to get a new token
    const refreshResult = await baseQuery("/refresh", api, extraOptions);
    if (refreshResult) {
      // store the new token
      api.dispatch(addToken(refreshResult.data));
      // retry the initial query
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(removeToken());
    }
  }
  return result;
};

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3001/",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().authSlice.token;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
