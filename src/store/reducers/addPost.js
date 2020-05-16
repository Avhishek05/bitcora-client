import {

} from "../constants";
import {ADD_POST} from "../constants";
import {ADD_POST_SUCCESS} from "../constants";
import {ADD_POST_FAILURE} from "../constants";

const initialState= { addPost: [], loader: true };

export default function(state= initialState, action) {

    switch (action.type) {
        case ADD_POST:
            return { ...state, loader: true };
        case ADD_POST_SUCCESS:
            return {...state, addPost: action.payload, error: false, loader: false};
        case ADD_POST_FAILURE:
            return { ...state, error: true,loader: false };
        default:
            return state;
    }
}
