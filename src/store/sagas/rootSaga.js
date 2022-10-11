import { all } from "redux-saga/effects";
import templateWatcher from "./templateSaga";

//root saga
export default function* rootSaga() {
  yield all([templateWatcher()]);
}
