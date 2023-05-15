import { call, put, all } from "redux-saga/effects";
import { getCookie } from 'cookies-next';
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

import AuthSaga from "./Features/auth/saga";
import UserSaga from './Features/user/saga';
import MoviesSaga from './Features/movies/saga';

const apiClient = axios.create({
  baseURL: 'http://localhost:4444/',
});

export const ApiMovieClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    language: 'uk'
  }
})

apiClient.interceptors.request.use(
  (config) => {
    const token = getCookie('cmAccessToken');

    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);


ApiMovieClient.interceptors.request.use(
  (config) => {
    config.headers.Authorization = "Bearer " + process.env.NEXT_PUBLIC_TOKEN_MOVIE_DATABASE;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export function* apiCall({ url, method, data }: AxiosRequestConfig) {
  try {
    const response: AxiosResponse = yield call(apiClient.request, {
      url,
      method,
      data,
    });
    return response.data;
  } catch (error) {
    yield put({ type: "API_CALL_FAILED", payload: error });
    throw error;
  }
}

export function* apiMovieCall({ url, method, data }: AxiosRequestConfig) {
  try {
    const response: AxiosResponse = yield call(ApiMovieClient.request, {
      url: `${url}?language=uk`,
      method,
      data,
    });
    return response.data;
  } catch (error) {
    yield put({ type: "API_CALL_FAILED", payload: error });
    throw error;
  }
}


export function* rootSaga() {
  yield all([AuthSaga(), UserSaga(), MoviesSaga()]);
}
