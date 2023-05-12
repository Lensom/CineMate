"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  loading: boolean;
  error: string;
  isAuth: boolean;
}

const initialState: AuthState = {
  loading: false,
  error: "",
  isAuth: false
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registrationRequest: (state) => {
      state.loading = true;
    },
    registrationSuccess: (state) => {
      state.loading = false;
      state.isAuth = true;
    },
    registrationError: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state,) => {
      state.loading = false;
      state.isAuth = true;
    },
    loginError: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    setIsAuth: (state) => {
      state.isAuth = true;
    }
  },
});

export const { loginRequest, registrationRequest } = authSlice.actions;

export default authSlice.reducer;
