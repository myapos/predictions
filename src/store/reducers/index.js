import { combineReducers } from "redux";
// import rootReducer from './rootReducer';
import loadCSV from "./csv/loadCSV";
import sma from "./sma/sma";
import trainModel from "./trainModel/trainModel";

const rootReducer = combineReducers({
  loadCSV,
  sma,
  trainModel
});

export default rootReducer;
