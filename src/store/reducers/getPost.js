import {
    GET_POST,
    GET_POST_SUCCESS,
    GET_POST_FAILURE
} from "../constants";

const initialState= { post: [], loader: true };

export default function(state= initialState, action) {
    switch (action.type) {
        case GET_POST:
            return { ...state, loader: true };
        case GET_POST_SUCCESS:
            return { ...state, post: action.payload, loader: false };
        case GET_POST_FAILURE:
            return { ...state, loader: false };
        default:
            return state;
    }
}
