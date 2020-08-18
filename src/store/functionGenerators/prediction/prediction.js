import { call, select, put } from "redux-saga/effects";
import * as api from "../../../api";
import * as actions from "../..";
import findStateProperty from "../../../helpers/findStateProperty";
import * as utils from "../../../utils";

function* prediction(action) {
  try {
    // reset epochLoss

    const outps = yield call(utils.prediction, {});

    console.log("predicted outps", outps);
    // yield put({ type: actions.SAGAS_TRAIN_MODEL, model, stats });
  } catch (e) {
    console.error("error", e);
  }
}

export default prediction;
