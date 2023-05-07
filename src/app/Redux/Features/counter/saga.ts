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

function* fetchData() {
  try {
    const data: ApiResponse = yield call(apiCall, {
      url: "https://api.publicapis.org/entries",
      method: "get",
    });
    yield put({ type: "FETCH_DATA_SUCCESS", payload: data });
  } catch (error) {
    console.log(error);
  }
}

export default function* watchSaga() {
  yield takeEvery("counter/increment", fetchData);
}
