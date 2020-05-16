import {
  FECTH_TASKS,
  ADD_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  CLOSE_TASK,
  REOPEN_TASK,
} from "./actionTypes";

import API from "../api";

export const fetchTasks = () => dispatch =>
  API.get("tasks").then(tasks => dispatch({ type: FECTH_TASKS, payload: tasks.data }));

export const createTask = taskData => dispatch => {
  const data = { ...taskData };
  API.post("tasks", data).then(task => dispatch({ type: ADD_TASK, payload: task.data }));
};

export const updateTask = (projectId, taskId, content, due_date) => dispatch => {
  const data = { content, due_date };
  API.post(`tasks/${taskId}`, data).then(res =>
    dispatch({
      type: UPDATE_TASK,
      payload: { projectId, taskId, content, due_date },
    })
  );
};

export const deleteTask = (projectId, taskId) => dispatch =>
  API.delete(`tasks/${taskId}`).then(
    dispatch({ type: DELETE_TASK, payload: { projectId, taskId } })
  );

export const closeTask = task => dispatch =>
  API.post(`tasks/${task.id}/close`).then(res => dispatch({ type: CLOSE_TASK, payload: task }));

export const reopenTask = task => dispatch =>
  API.post(`tasks/${task.id}/reopen`).then(res => dispatch({ type: REOPEN_TASK, payload: task }));
