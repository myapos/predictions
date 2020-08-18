import { takeEvery } from "redux-saga/effects";
import * as functionGenerators from "./functionGenerators";

import * as actions from ".";

function* rootSaga() {
  console.log("sagas is loaded succesfully");

  yield takeEvery(actions.GET_URL, functionGenerators.loadCSV);
  yield takeEvery(actions.SAGAS_SMA, functionGenerators.sma);
  yield takeEvery(actions.TRAIN_MODEL, functionGenerators.trainModel);
  yield takeEvery(actions.PREDICTION, functionGenerators.prediction);
}

export default rootSaga;
