import { takeEvery, call, put } from "redux-saga/effects";
import { apiCall } from "../../sagas";

interface ApiAuthResponse {
  token: string;
  email: string;
  username: string;
}

function* fetchUserInfo({ payload }: any) {
  try {
    const data: ApiAuthResponse = yield call(apiCall, {
      url: "auth/user",
      method: "get",
      data: payload,
    });
    yield put({ type: "user/userInfoSuccess", payload: data });
    yield put({ type: "auth/setIsAuth" });
  } catch (error) {
    yield put({ type: "user/userInfoError", payload: error });
  }
}

export default function* watchSaga() {
  yield takeEvery("user/userInfoRequest", fetchUserInfo);
}
