import { FETCH_PROJECTS } from "../actions/actionTypes";

import API from "../api";

export const fetchProjects = () => dispatch => {
    API.get("projects").then(projects =>
        dispatch({ type: FETCH_PROJECTS, payload: projects.data })
    );
};
