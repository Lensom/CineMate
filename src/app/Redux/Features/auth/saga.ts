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
  console.log(payload);
  try {
    const data: ApiResponse = yield call(apiCall, {
      url: "https://api.publicapis.org/entries",
      method: "get",
      payload,
    });
    yield put({ type: "loginSuccess", payload: data });
  } catch (error) {
    yield put({ type: "loginError", payload: error });
  }
}

function* registration({ payload }: any) {
  console.log(payload);
  try {
    const data: ApiResponse = yield call(apiCall, {
      url: "https://api.publicapis.org/entries",
      method: "get",
      payload,
    });
    yield put({ type: "registrationSuccess", payload: data });
  } catch (error) {
    yield put({ type: "registrationError", payload: error });
  }
}

export default function* watchSaga() {
  yield takeEvery("auth/login", login);
  yield takeEvery("auth/registration", registration);
}
