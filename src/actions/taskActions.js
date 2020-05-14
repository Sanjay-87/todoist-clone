import { FECTH_TASKS, ADD_TASK } from "./actionTypes";

import API from "../api";

export const fetchTasks = () => dispatch =>
  API.get("tasks").then(tasks => dispatch({ type: FECTH_TASKS, payload: tasks.data }));

export const createTask = taskData => dispatch => {
  const data = { ...taskData };
  API.post("tasks", data).then(task => dispatch({ type: ADD_TASK, payload: task.data }));
};
