import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const tokens = localStorage.getItem("token");

interface IToken {
  token: String | null;
}

const initialState: IToken = {
  token: null || tokens,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    addToken: (state, { payload }) => {
      state.token = payload;
      localStorage.setItem("token", payload);
    },
    removeToken: (state) => {
      state.token = null;
      localStorage.removeItem("token");
    },
  },
});
export const selectedToken = (state: RootState) => state.authSlice.token;

export default authSlice.reducer;
export const { addToken, removeToken } = authSlice.actions;
