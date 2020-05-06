/**
 * Created by Abhi on 03-05-2020.
 */
import {TEXT_CHANGED} from "../actions/types";
const INITIAL_STATE = {text: ''};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TEXT_CHANGED:
            //we don't modify our existing object
            //state.email = action.payload is wrong
            return {...state, text: action.payload};
        default:
            return state;
    }
};