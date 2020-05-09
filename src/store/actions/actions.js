/**
 * Created by Abhi on 03-05-2020.
 */
import {TEXT_CHANGED} from "./types";
import {GET_POSTS} from "../constants";
export const textChanged = text => {
    return {
        type: TEXT_CHANGED,
        payload: text
    };
};

export function getPostslist(payload) {
    console.log("jack", payload);
    return {
        type: GET_POSTS,
        payload
    };
}