import { FETCH_PROJECTS } from "../actions/actionTypes";

const initialState = { projects: [] };

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PROJECTS: {
            return { ...state, projects: action.payload };
        }
        default:
            return state;
    }
};
