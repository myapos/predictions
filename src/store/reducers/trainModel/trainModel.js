import * as actions from "../..";
import initialState from "./initialState";

// eslint-disable-next-line max-lines-per-function
const trainModel = (state = initialState, action) => {
  const { type, model, stats, epoch, loss } = action;

  switch (type) {
    case actions.SAGAS_TRAIN_MODEL:
      return {
        ...state,
        model,
        stats
      };

    case actions.SAGAS_EPOCH_LOSS:
      return {
        ...state,
        epoch,
        loss
      };
    default:
      return state;
  }
};

export default trainModel;
