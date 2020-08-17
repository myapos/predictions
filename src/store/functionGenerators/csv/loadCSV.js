import { call, select, put } from "redux-saga/effects";
import * as api from "../../../api";
import * as actions from "../..";

function* loadCSV(action) {
  const state = yield select();
  const { url } = action;
  console.log("action", action);
  const res = yield call(api.loadCSV, url);

  console.log("res", res);

  yield put({ type: actions.SAGAS_LOAD_CSV, rawData: res });
}

export default loadCSV;
