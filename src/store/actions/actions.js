/**
 * Created by Abhi on 03-05-2020.
 */
import {TEXT_CHANGED} from "./types";
import {ADD_POST, GET_POST, GET_POSTS} from "../constants";
export const textChanged = text => {
    return {
        type: TEXT_CHANGED,
        payload: text
    };
};

export function getPostslist(payload) {
    return {
        type: GET_POSTS,
        payload
    };
}

export function addPost(payload) {
    return {
        type: ADD_POST,
        payload
    };
}

export function getPost(payload) {
    return {
        type: GET_POST,
        payload
    };
}