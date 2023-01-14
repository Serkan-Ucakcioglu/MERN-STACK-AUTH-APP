import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    addToken: (state, { payload }) => {
      state.token = payload;
    },
  },
});
export const selectedToken = (state) => state.authSlice.token;

export default authSlice.reducer;
export const { addToken } = authSlice.actions;
