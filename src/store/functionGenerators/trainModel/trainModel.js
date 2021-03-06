import { call, select, put } from "redux-saga/effects";
import * as api from "../../../api";
import * as actions from "../..";
import findStateProperty from "../../../helpers/findStateProperty";
import * as utils from "../../../utils";

function* trainModel(action) {
  try {
    // reset epochLoss
    yield put({ type: actions.RESET_TRAIN_MODEL });

    const { fn } = action;
    const state = yield select();

    const { sma, processed } = findStateProperty(state, "sma");

    const inputs = sma.map(function (inp_f) {
      return inp_f.set.map(function (val) {
        return val.ys;
      });
    });

    const outputs = sma.map(function (outp_f) {
      return outp_f.sma;
    });

    const { model, stats } = yield call(utils.trainModel, {
      inputs,
      outputs,
      fn
    });

    yield put({
      type: actions.SAGAS_TRAIN_MODEL,
      model,
      stats,
      inputs,
      outputs
    });
  } catch (e) {
    console.error("error", e);
  }
}

export default trainModel;
