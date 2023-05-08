"use client";

import { createSlice } from "@reduxjs/toolkit";

interface IUserInterface {
  name: string;
  email: string;
  token: string;
}

export interface AuthState {
  user: IUserInterface;
  loading: boolean;
  error: string;
}

const initialState: AuthState = {
  user: {
    name: "",
    email: "",
    token: "",
  },
  loading: false,
  error: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registrationRequest: (state) => {
      state.loading = true;
    },
    registrationSuccess: (state, { payload }) => {
      state.user = payload;
      state.loading = false;
    },
    registrationError: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, { payload }) => {
      state.user = payload;
      state.loading = false;
    },
    loginError: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
  },
});

export const { loginRequest, loginSuccess, loginError } = authSlice.actions;

export default authSlice.reducer;
