import { FECTH_TASKS } from "../actions/actionTypes";

const initialState = { tasks: {} };

export default (state = initialState, action) => {
  switch (action.type) {
    case FECTH_TASKS: {
      const tasks = {};
      action.payload.forEach(task => {
        tasks[`${task.project_id}`] = tasks[`${task.project_id}`] || [];
        tasks[`${task.project_id}`].push(task);
      });
      return { ...state, tasks };
    }
    default:
      return state;
  }
};
