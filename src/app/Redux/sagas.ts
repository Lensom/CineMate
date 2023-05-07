import { call, put, all } from "redux-saga/effects";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

import CounterSaga from "./Features/counter/saga";

export function* apiCall({ url, method, data }: AxiosRequestConfig) {
  try {
    const response: AxiosResponse = yield call(axios.request, {
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
  yield all([CounterSaga()]);
}
