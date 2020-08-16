import { combineReducers } from "redux";
// import rootReducer from './rootReducer';
import loadCSV from "./csv/loadCSV";

const rootReducer = combineReducers({
  loadCSV
});

export default rootReducer;
