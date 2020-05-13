import { FECTH_TASKS } from "./actionTypes";

import API from "../api";

export const fetchTasks = () => dispatch =>
  API.get("tasks").then(tasks => dispatch({ type: FECTH_TASKS, payload: tasks.data }));
