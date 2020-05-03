/**
 * Created by Abhi on 03-05-2020.
 */
import {EMAIL_CHANGED} from "./types";
export const emailChanged = text => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};