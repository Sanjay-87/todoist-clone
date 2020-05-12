import { FETCH_SECTIONS } from "../actions/actionTypes";
import { DELETE_SECTIONS } from "../actions/actionTypes";
import { INSERT_SECTIONS } from "../actions/actionTypes";

import API from "../api";

export const fetchSections = () => (dispatch) => {
  API.get("sections").then((section) =>{
    dispatch({ type: FETCH_SECTIONS, payload: section.data })
  }   
  );
};

export const onDeleteSection = id => (dispatch) => {
  API.delete(`sections/${id}`).then((section) =>{
    dispatch({ type: DELETE_SECTIONS, payload: id })
  }   
  );
};

export const insertSection = (projectId,name) => (dispatch) => {
  API.post(`sections?project_id=${projectId}&name=${name}`).then((section) =>{
    console.log(section.data)
    dispatch({ type: INSERT_SECTIONS, payload: section.data })
  }   
  );
};