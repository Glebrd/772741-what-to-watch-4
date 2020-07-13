import {combineReducers} from "redux";
import {reducer as data} from "./data/data.js";
import {reducer as application} from "./application/application.js";

export default combineReducers({
  data,
  application,
});
