import { FETCH_PROJECTS, ADD_PROJECT, DELETE_PROJECT, EDIT_PROJECT } from "../actions/actionTypes";

const initialState = { projects: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROJECTS: {
      return { ...state, projects: action.payload };
    }

    case ADD_PROJECT: {
      return { ...state, projects: [...state.projects, action.payload] };
    }

    case DELETE_PROJECT: {
      return {
        ...state,
        projects: [...state.projects.filter(project => project.id !== action.payload)],
      };
    }

    case EDIT_PROJECT: {
      return {
        ...state,
        projects: [
          ...state.projects.map(project => {
            if (project.id !== action.payload.projectId) {
              return project;
            } else {
              const updateProject = project;
              updateProject.name = action.payload.name;
              return updateProject;
            }
          }),
        ],
      };
    }
    default:
      return state;
  }
};
