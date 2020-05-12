import { FETCH_PROJECTS, ADD_PROJECT, DELETE_PROJECT, EDIT_PROJECT } from "../actions/actionTypes";

import API from "../api";


export const fetchProjects = () => dispatch => {
  API.get("projects").then(projects => dispatch({ type: FETCH_PROJECTS, payload: projects.data }));
};

export const addProject = name => dispatch => {
  API.post(`projects?name=${name}`).then(project =>
    dispatch({ type: ADD_PROJECT, payload: project.data })
  );
};

export const deleteProject = projectId => dispatch => {
  API.delete(`projects/${projectId}`).then(project =>
    dispatch({ type: DELETE_PROJECT, payload: projectId })
  );
};

export const editProject = (projectId, name) => dispatch => {
  const data = { name };
  API.post(`projects/${projectId}`, data).then(res =>
    dispatch({ type: EDIT_PROJECT, payload: { projectId, name } })

  );
};
