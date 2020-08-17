import { call, select, put } from "redux-saga/effects";
import * as api from "../../../api";
import * as actions from "../..";
import findStateProperty from "../../../helpers/findStateProperty";
import * as utils from "../../../utils";

function* sma(action) {
  try {
    const state = yield select();
    const { rawData } = findStateProperty(state, "loadCSV");

    const processed = rawData.map((value) => {
      return { xs: value.xs.Month, ys: value.ys["Monthly beer production"] };
    });

    const sma = utils.computeSMA(processed);

    // merge
    const plotSMAValues = utils.plotSMA({ sma, processed });

    yield put({
      type: actions.SAGAS_PLOT_SMA_VALUES,
      plotSMAValues,
      processed
    });
  } catch (e) {
    console.error("error", e);
  }
}

export default sma;
