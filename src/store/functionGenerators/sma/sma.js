import { call, select, put } from "redux-saga/effects";
import * as api from "../../../api";
import * as actions from "../..";
import findStateProperty from "../../../helpers/findStateProperty";
import * as utils from "../../../utils";

function* sma(action) {
  try {
    const state = yield select();

    console.log("state", state);
    const { rawData, parameters } = findStateProperty(state, "loadCSV");

    const { csvProperty, dateProperty, windowSize } = parameters;
    const processed = rawData.map((value) => {
      return { xs: value.xs[dateProperty], ys: value.ys[csvProperty] };
    });

    const sma = utils.computeSMA(processed);

    // merge
    const plotSMAValues = utils.plotSMA({ sma, processed, windowSize });

    yield put({
      type: actions.SAGAS_PLOT_SMA_VALUES,
      plotSMAValues,
      processed,
      sma
    });
  } catch (e) {
    console.error("error", e);
  }
}

export default sma;
