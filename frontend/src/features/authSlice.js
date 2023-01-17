import { createSlice } from "@reduxjs/toolkit";

const tokens = localStorage.getItem("token");

const initialState = {
  token: null || tokens,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    addToken: (state, { payload }) => {
      state.token = payload;
      localStorage.setItem("token", state.token);
    },
    removeToken: (state) => {
      state.token = null;
      localStorage.removeItem("token");
    },
  },
});
export const selectedToken = (state) => state.authSlice.token;

export default authSlice.reducer;
export const { addToken, removeToken } = authSlice.actions;
