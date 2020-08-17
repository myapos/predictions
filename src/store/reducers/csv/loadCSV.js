import * as actions from "../..";
import initialState from "./initialState";

// eslint-disable-next-line max-lines-per-function
const loadCSV = (state = initialState, action) => {
  const { type, url, rawData } = action;

  switch (type) {
    case actions.GET_URL:
      return {
        ...state,
        url
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
