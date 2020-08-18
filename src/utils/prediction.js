import { call, select, put } from "redux-saga/effects";
import * as tf from "@tensorflow/tfjs";
import * as CONSTANTS from "../constants/constants";
import * as actions from "../store/actions/actions";
import findStateProperty from "../helpers/findStateProperty";

function* prediction({ size = CONSTANTS.N_ITEMS }) {
  const state = yield select();

  console.log("state", state);
  const { inputs } = findStateProperty(state, "trainModel");
  if (window.trainModel) {
    const { model } = window.trainModel;

    console.log("model", model.predict);

    const inps = inputs.slice(
      Math.floor((size / 100) * inputs.length),
      inputs.length
    );
    const outps = model
      .predict(
        tf.tensor2d(inps, [inps.length, inps[0].length]).div(tf.scalar(10))
      )
      .mul(10);

    return Array.from(outps.dataSync());
  }
  alert("Please train model first");
}

export default prediction;
