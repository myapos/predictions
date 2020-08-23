import * as actions from "../..";
import initialState from "./initialState";

// eslint-disable-next-line max-lines-per-function
const loadCSV = (state = initialState, action) => {
  const { type, rawData, parameters } = action;

  switch (type) {
    case actions.GET_URL:
      const { url, csvProperty, epochs, windowSize, dateProperty } = parameters;
      return {
        ...state,
        parameters: {
          url,
          csvProperty,
          epochs: parseInt(epochs),
          windowSize: parseInt(windowSize),
          dateProperty
        }
      };
    case actions.SAGAS_LOAD_CSV:
      return {
        ...state,
        rawData
      };

    default:
      return state;
  }
};

export default loadCSV;
