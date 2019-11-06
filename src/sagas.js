import { takeEvery, put, all } from "redux-saga/effects";
import { fetchSuccess } from "./actions";

function* start() {
  yield takeEvery("FETCH_START", fetchAsync);
}

function* fetchAsync() {
  const news = yield fetch(
    "https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc"
  ).then(res => res.json());
  yield put(fetchSuccess(news));
}

export default function* rootSaga() {
  yield all([start()]);
}
