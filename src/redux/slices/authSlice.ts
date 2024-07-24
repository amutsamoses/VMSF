import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TUser } from "../../types";

export interface AuthState {
  isAuthenticated: boolean;
  user: TUser | null;
  token: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ user: TUser; token: string }>) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer as (
  state: AuthState,
  action: PayloadAction<{ user: TUser; token: string }>
) => AuthState;
