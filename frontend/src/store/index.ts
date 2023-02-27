import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import authSlice from "../features/authSlice";

export const store = configureStore({
  reducer: {
    authSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
