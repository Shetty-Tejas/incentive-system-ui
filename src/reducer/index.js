import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import actionReducer from "./actionReducer";

export default combineReducers({
  states: actionReducer,
  errors: errorReducer
});
