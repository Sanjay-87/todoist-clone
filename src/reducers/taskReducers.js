import { FECTH_TASKS, ADD_TASK } from "../actions/actionTypes";

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
    case ADD_TASK: {
      const task = action.payload;
      return {
        ...state,
        tasks: { ...state.tasks, [task.project_id]: [...state.tasks[task.project_id], task] },
      };
    }

    default:
      return state;
  }
};
