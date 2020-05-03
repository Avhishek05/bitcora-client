/**
 * Created by Abhi on 03-05-2020.
 */
import {EMAIL_CHANGED} from "../actions/types";
const INITIAL_STATE = {email: ''};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            //we don't modify our existing object
            //state.email = action.payload is wrong
            return {...state, email: action.payload};
        default:
            return state;
    }
};