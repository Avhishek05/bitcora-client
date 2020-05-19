import {SEARCH_TEXT} from "./types";
import {ADD_POST, GET_POST, GET_POSTS,ADD_COMMENT} from "../constants";

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

export function getCommentsList(payload) {
    return {
        type: GET_COMMENTS,
        payload
    };
}

export function searchText(payload){
    return {
        type : SEARCH_TEXT,
        payload
    };
}