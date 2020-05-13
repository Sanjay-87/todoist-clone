import { FETCH_SECTIONS } from "../actions/actionTypes";
import { DELETE_SECTIONS } from "../actions/actionTypes";
import { INSERT_SECTIONS } from "../actions/actionTypes";
import { UPDATE_SECTIONS } from "../actions/actionTypes";

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
             section:[...state.section.filter(section =>  section.id !== action.payload)] }
        }

        case INSERT_SECTIONS: {
            console.log(state)
           return { ...state,
             section:[...state.section,action.payload] };
        }
        case UPDATE_SECTIONS: {
            return{
                ...state,
                section: [
                    ...state.section.map(section=>{
                        if(section.id !== action.payload.sectionId){
                            return section;
                        }
                        else {
                            const updateSection = section;
                            updateSection.name = action.payload.name;
                            return updateSection;
                        }
                    }),
                ],
            };

        }

        default:
            return state;
    }
};
