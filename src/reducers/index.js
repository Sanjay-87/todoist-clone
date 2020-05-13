import { combineReducers } from "redux";

import projectReducer from "./projectReducers";
import sectionReducer from "./sectionReducers";
export default combineReducers({ projectReducer,sectionReducer });