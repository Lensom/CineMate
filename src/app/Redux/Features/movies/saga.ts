import { takeEvery, call, put } from "redux-saga/effects";
import { apiMovieCall } from "../../sagas";

interface ApiAuthResponse {
  token: string;
  email: string;
  username: string;
}

function* fetchPopularMovies({ payload }: any) {
  try {
    const data: ApiAuthResponse = yield call(apiMovieCall, {
      url: "movie/popular",
      method: "get",
      data: payload,
    });
    yield put({ type: "movies/popularMoviesSuccess", payload: data });
  } catch (error) {
    yield put({ type: "movies/popularMoviesError", payload: error });
  }
}

function* fetchRatingMovies({ payload }: any) {
  try {
    const data: ApiAuthResponse = yield call(apiMovieCall, {
      url: "movie/top_rated",
      method: "get",
      data: payload,
    });
    yield put({ type: "movies/ratingMoviesSuccess", payload: data });
  } catch (error) {
    yield put({ type: "movies/ratingMoviesError", payload: error });
  }
}

export default function* watchSaga() {
  yield takeEvery("movies/popularMoviesRequest", fetchPopularMovies);
  yield takeEvery("movies/ratingMoviesRequest", fetchRatingMovies);
}
