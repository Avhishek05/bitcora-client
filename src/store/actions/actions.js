import {TEXT_CHANGED} from "./types";
import {ADD_POST, GET_POST, GET_POSTS,GET_COMMENTS,ADD_COMMENT} from "../constants";
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

export function addComment(payload){
    return {
        type : ADD_COMMENT,
        payload
    };
}