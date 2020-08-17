import { call, select, put } from "redux-saga/effects";
import * as api from "../../../api";
import * as actions from "../..";
import findStateProperty from "../../../helpers/findStateProperty";
import * as utils from "../../../utils";

function callback(epoch, log) {
  console.log(`epoch:${epoch}, loss:${log.loss}`);

  // yield put({ type: actions.SAGAS_EPOCH_LOSS, epoch, loss: log.loss });
}

function* trainModel(action) {
  try {
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
      callback
    });

    yield put({ type: actions.SAGAS_TRAIN_MODEL, model, stats });
  } catch (e) {
    console.error("error", e);
  }
}

export default trainModel;
