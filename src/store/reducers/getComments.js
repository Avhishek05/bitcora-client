import {
    GET_COMMENTS,
    GET_COMMENTS_SUCCESS,
    GET_COMMENTS_FAILURE
} from "../constants";

const initialState= { commentList: [], loader: true };

export default function(state= initialState, action) {
    switch (action.type) {
        case GET_COMMENTS:
            return { ...state, loader: true };
        case GET_COMMENTS_SUCCESS:
            return { ...state, commentList: action.payload, loader: false };
        case GET_COMMENTS_FAILURE:
            return { ...state, loader: false };
        default:
            return state;
    }
}
