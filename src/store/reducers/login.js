import {LOGIN_FAILED, LOGIN_SUCCESS, PERFORM_LOGIN} from "../constants";

const initialState= { user: [], loader: true };

export default function(state= initialState, action) {

    switch (action.type) {
        case PERFORM_LOGIN:
            return { ...state, loader: true };
        case LOGIN_SUCCESS:
            return {...state, user: action.payload, error: false, loader: false};
        case LOGIN_FAILED:
            return { ...state, error: true,loader: false };
        default:
            return state;
    }
}
