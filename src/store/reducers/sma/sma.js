import * as actions from "../..";
import initialState from "./initialState";

// eslint-disable-next-line max-lines-per-function
const sma = (state = initialState, action) => {
  const { type, plotSMAValues, processed } = action;

  switch (type) {
    case actions.SAGAS_PLOT_SMA_VALUES:
      return {
        ...state,
        plotSMAValues,
        processed
      };

    default:
      return state;
  }
};

export default sma;
