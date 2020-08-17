import { call, select, put } from "redux-saga/effects";
import * as api from "../../../api";
import * as actions from "../..";

function* loadCSV(action) {
  try {
    const state = yield select();
    const { url } = action;
    console.log("action", action);
    const res = yield call(api.loadCSV, url);

    console.log("res", res);

    if (res.length > 0) {
      yield put({ type: actions.SAGAS_LOAD_CSV, rawData: res });

      // calculate sma
      yield put({ type: actions.SAGAS_SMA });

      alert("Loaded data");
    }
  } catch (e) {
    console.error("error", e);
  }
}

export default loadCSV;
