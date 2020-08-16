import { takeEvery } from "redux-saga/effects";
import * as functionGenerators from "./functionGenerators";

import * as actions from ".";

function* rootSaga() {
  console.log("sagas is loaded succesfully");
}

export default rootSaga;
