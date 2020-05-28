import {SEARCH_TEXT} from "./types";
import {ADD_COMMENT, ADD_POST, GET_COMMENTS, GET_POST, GET_POSTS, PERFORM_LOGIN, PERFORM_SIGNUP} from "../constants";

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

export function login(payload){
    return {
        type : PERFORM_LOGIN,
        payload
    };
}

export function register(payload){
    return {
        type : PERFORM_SIGNUP,
        payload
    };
}