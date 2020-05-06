/**
 * Created by Abhi on 03-05-2020.
 */
import {TEXT_CHANGED} from "./types";
export const textChanged = text => {
    return {
        type: TEXT_CHANGED,
        payload: text
    };
};
