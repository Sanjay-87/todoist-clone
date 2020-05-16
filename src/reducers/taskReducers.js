import {
  FECTH_TASKS,
  ADD_TASK,
  UPDATE_TASK,
  DELETE_TASK,
} from '../actions/actionTypes';

const initialState = { tasks: {} };

export default (state = initialState, action) => {
  switch (action.type) {
    case FECTH_TASKS: {
      const tasks = {};
      action.payload.forEach((task) => {
        tasks[`${task.project_id}`] = tasks[`${task.project_id}`] || [];
        tasks[`${task.project_id}`].push(task);
      });
      return { ...state, tasks };
    }

    case ADD_TASK: {
      const task = action.payload;
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [task.project_id]: [...state.tasks[task.project_id], task],
        },
      };
    }

    case UPDATE_TASK: {
      const { projectId, taskId, content, due_date } = action.payload;
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [projectId]: [
            ...state.tasks[projectId].map((task) => {
              if (task.id === parseInt(taskId)) {
                const newTask = task;
                newTask.content = content;
                newTask.due.date = due_date;
                console.log(newTask.due.date);
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
          [projectId]: [
            ...state.tasks[projectId].filter((task) => task.id !== taskId),
          ],
        },
      };
    }

    default:
      return state;
  }
};
