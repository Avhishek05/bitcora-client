import {ADD_COMMENT,ADD_COMMENT_SUCCESS,ADD_COMMENT_FAILURE} from "../constants";

const initialState= { addComment: [], loader: true };

export default function(state= initialState, action) {

    switch (action.type) {
        case ADD_COMMENT:
            return { ...state, loader: true };
        case ADD_COMMENT_SUCCESS:
            return {...state, addPost: action.payload, error: false, loader: false};
        case ADD_COMMENT_FAILURE:
            return { ...state, error: true,loader: false };
        default:
            return state;
    }
}
