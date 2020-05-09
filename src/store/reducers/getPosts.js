import {
    GET_POSTS,
    GET_POSTS_SUCCESS,
    GET_POSTS_FAILURE
} from "../constants";

const initialState= { postLists: [], loader: true };

export default function(state= initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return { ...state, loader: true };
        case GET_POSTS_SUCCESS:
            return { ...state, postLists: action.payload, loader: false };
        case GET_POSTS_FAILURE:
            return { ...state, loader: false };
        default:
            return state;
    }
}
