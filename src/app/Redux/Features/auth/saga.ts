import { takeEvery, call, put } from "redux-saga/effects";
import { apiCall } from "../../sagas";

interface Entry {
  API: string;
  Description: string;
  // ...
}

interface ApiResponse {
  count: number;
  entries: Entry[];
}

function* login({ payload }: any) {
  try {
    const data: ApiResponse = yield call(apiCall, {
      url: "auth/login",
      method: "post",
      data: payload,
    });
    yield put({ type: "auth/loginSuccess", payload: data });
  } catch (error) {
    yield put({ type: "auth/loginError", payload: error });
  }
}

function* registration({ payload }: any) {
  try {
    const data: ApiResponse = yield call(apiCall, {
      url: "auth/register",
      method: "post",
      data: payload,
    });
    yield put({ type: "auth/registrationSuccess", payload: data });
  } catch (error) {
    yield put({ type: "auth/registrationError", payload: error });
  }
}

export default function* watchSaga() {
  yield takeEvery("auth/loginRequest", login);
  yield takeEvery("auth/registrationRequest", registration);
}
