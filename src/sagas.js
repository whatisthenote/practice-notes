import { takeEvery, put } from "redux-saga/effects";
import { fetchNewsSuccess } from "./actions";

export function* fetchStart() {
  yield takeEvery("FETCH_NEWS_START", fetchAsync);
}

function* fetchAsync() {
  const json = yield fetch(
    "https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc"
  ).then(res => res.json());
  yield put(fetchNewsSuccess(json));
}
