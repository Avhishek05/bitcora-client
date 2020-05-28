import {SIGNUP_FAILED, SIGNUP_SUCCESS, PERFORM_SIGNUP} from "../constants";

const initialState= { user: [], loader: true };

export default function(state= initialState, action) {

    switch (action.type) {
        case PERFORM_SIGNUP:
            return { ...state, loader: true };
        case SIGNUP_SUCCESS:
            return {...state, user: action.payload, error: false, loader: false};
        case SIGNUP_FAILED:
            return { ...state, error: true,loader: false };
        default:
            return state;
    }
}
