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

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    popularMoviesRequest: (state) => {
      state.loading = false;
    },
    popularMoviesSuccess: (state, { payload }) => {
      state.user = payload;
      state.loading = false;
    },
    popularMoviesError: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    }
  },
});

export const { popularMoviesRequest } = moviesSlice.actions;

export default moviesSlice.reducer;
