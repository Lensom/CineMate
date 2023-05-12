import { call, put, all } from "redux-saga/effects";
import { getCookie } from 'cookies-next';
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

import AuthSaga from "./Features/auth/saga";
import UserSaga from './Features/user/saga';

const apiClient = axios.create({
  baseURL: 'http://localhost:4444/',
});

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

export function* rootSaga() {
  yield all([AuthSaga(), UserSaga()]);
}
