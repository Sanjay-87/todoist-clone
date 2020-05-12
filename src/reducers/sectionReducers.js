import { FETCH_SECTIONS } from "../actions/actionTypes";
import { DELETE_SECTIONS } from "../actions/actionTypes";
import { INSERT_SECTIONS } from "../actions/actionTypes";

const initialState = { section: [] };

export default (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case FETCH_SECTIONS: {
            return { ...state, section: action.payload };
            
        }

        case DELETE_SECTIONS: {
            // console.log(action.payload)
           return { ...state,
             section:[...state.section.filter(section =>  section.id != action.payload)] }
        }

        case INSERT_SECTIONS: {
            console.log(state)
           return { ...state,
             section:[...state.section,action.payload] };
        }

        default:
            return state;
    }
};
