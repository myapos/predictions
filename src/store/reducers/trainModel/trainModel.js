import * as actions from "../..";
import initialState from "./initialState";

// eslint-disable-next-line max-lines-per-function
const trainModel = (state = initialState, action) => {
  const { type, model, stats, epochValue, lossValue } = action;

  switch (type) {
    case actions.SAGAS_TRAIN_MODEL:
      return {
        ...state,
        model,
        stats
      };

    case actions.RESET_TRAIN_MODEL:
      // reset epoch and loss pair values in redux state
      return {
        ...state,
        epochLoss: [],
        model: {},
        stats: {}
      };

    case actions.SAGAS_EPOCH_LOSS:
      // add epoch and loss pair
      state.epochLoss.push({
        epoch: epochValue,
        loss: lossValue,
        id: state.epochLoss.length > 0 ? state.epochLoss.length : 0
      });

      const newEpochLoss = [...state.epochLoss];

      console.log("state", state, epochValue, lossValue, newEpochLoss);
      return {
        ...state,
        epochLoss: newEpochLoss
      };
    default:
      return state;
  }
};

export default trainModel;
