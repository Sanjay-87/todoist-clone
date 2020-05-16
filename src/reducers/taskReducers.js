import {
  FECTH_TASKS,
  ADD_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  CLOSE_TASK,
} from "../actions/actionTypes";

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

    case UPDATE_TASK: {
      const { projectId, taskId, content } = action.payload;
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [projectId]: [
            ...state.tasks[projectId].map(task => {
              if (task.id === parseInt(taskId)) {
                const newTask = task;
                newTask.content = content;
                return newTask;
              } else {
                return task;
              }
            }),
          ],
        },
      };
    }

    case DELETE_TASK: {
      const { projectId, taskId } = action.payload;
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [projectId]: [...state.tasks[projectId].filter(task => task.id !== taskId)],
        },
      };
    }

    case CLOSE_TASK: {
      const { project_id, id } = action.payload;
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [project_id]: [...state.tasks[project_id].filter(task => task.id !== id)],
        },
      };
    }

    default:
      return state;
  }
};
