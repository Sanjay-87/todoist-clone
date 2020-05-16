import { FECTH_TASKS, ADD_TASK, UPDATE_TASK, DELETE_TASK } from './actionTypes';

import API from '../api';

export const fetchTasks = () => (dispatch) =>
  API.get('tasks').then((tasks) =>
    dispatch({ type: FECTH_TASKS, payload: tasks.data })
  );

export const createTask = (taskData) => (dispatch) => {
  console.log(taskData);
  const data = { ...taskData };
  API.post('tasks', data).then((task) =>
    dispatch({ type: ADD_TASK, payload: task.data })
  );
};

export const updateTask = (projectId, taskId, content, due_date) => (
  dispatch
) => {
  const data = { content, due_date };
  console.log(due_date);
  // const date = { due_date };
  console.log(data);
  API.post(`tasks/${taskId}`, data).then((res) =>
    dispatch({
      type: UPDATE_TASK,
      payload: { projectId, taskId, content, due_date },
    })
  );
};

export const deleteTask = (projectId, taskId) => (dispatch) => {
  API.delete(`tasks/${taskId}`).then(
    dispatch({ type: DELETE_TASK, payload: { projectId, taskId } })
  );
};
