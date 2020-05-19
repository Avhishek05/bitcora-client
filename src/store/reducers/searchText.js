import {
    SEARCH_TEXT
} from "../actions/types";

export default function (state = {}, action) {
    switch (action.type) {
        case SEARCH_TEXT:
            return {...state, value: action.payload, loader: true};
        default:
            return state;
    }
}
