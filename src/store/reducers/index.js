import { combineReducers } from "redux";
// import rootReducer from './rootReducer';
import loadCSV from "./csv/loadCSV";
import sma from "./sma/sma";

const rootReducer = combineReducers({
  loadCSV,
  sma
});

export default rootReducer;
