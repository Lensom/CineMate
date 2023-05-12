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

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userInfoRequest: (state) => {
      state.loading = false;
    },
    userInfoSuccess: (state, { payload }) => {
      state.user = payload;
      state.loading = false;
    },
    userInfoError: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    }
  },
});

export const { userInfoRequest } = userSlice.actions;

export default userSlice.reducer;
