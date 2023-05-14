"use client";

import { createSlice } from "@reduxjs/toolkit";

interface IPopular {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}


export interface AuthState {
  populars: IPopular[];
  ratings: IPopular[];
  loading: boolean;
  error: string;
}

const initialState: AuthState = {
  populars: [],
  ratings: [],
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
      state.populars = payload.results;
      state.loading = false;
    },
    popularMoviesError: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    ratingMoviesRequest: (state) => {
      state.loading = false;
    },
    ratingMoviesSuccess: (state, { payload }) => {
      state.ratings = payload.results;
      state.loading = false;
    },
    ratingMoviesError: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    }
  },
});

export const { popularMoviesRequest, ratingMoviesRequest } = moviesSlice.actions;

export default moviesSlice.reducer;
