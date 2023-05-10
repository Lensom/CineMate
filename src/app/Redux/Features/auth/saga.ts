import { takeEvery, call, put } from "redux-saga/effects";
import { apiCall } from "../../sagas";
import { setCookie } from 'cookies-next';

interface ApiAuthResponse {
  token: string;
  email: string;
  username: string;
}

function* login({ payload }: any) {
  try {
    const data: ApiAuthResponse = yield call(apiCall, {
      url: "auth/login",
      method: "post",
      data: payload,
    },
    );
    setCookie('cmAccessToken', data.token)
    yield put({ type: "auth/loginSuccess", payload: data });
  } catch (error) {
    yield put({ type: "auth/loginError", payload: error });
  }
}

function* registration({ payload }: any) {
  try {
    const data: ApiAuthResponse = yield call(apiCall, {
      url: "auth/register",
      method: "post",
      data: payload,
    });
    setCookie('cmAccessToken', data.token)
    console.log(data)
    yield put({ type: "auth/registrationSuccess", payload: data });
  } catch (error) {
    yield put({ type: "auth/registrationError", payload: error });
  }
}

export default function* watchSaga() {
  yield takeEvery("auth/loginRequest", login);
  yield takeEvery("auth/registrationRequest", registration);
}
