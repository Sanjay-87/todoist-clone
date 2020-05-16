import { combineReducers } from "redux";

import projectReducer from "./projectReducers";
import sectionReducer from "./sectionReducers";
import taskReducer from "./taskReducers";

export default combineReducers({ projectReducer, sectionReducer, taskReducer });
