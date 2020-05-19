import request from "./request";

function getPostslist(dataUrl) {
    const method = "GET";
    const url = dataUrl;
    return request(url, method, {}, {});
}

function getPost(dataUrl) {
    const method = "GET";
    const url = dataUrl;
    return request(url, method, {}, {});
}

function addPost(dataUrl, payload) {
    const method = "POST";
    const url = dataUrl;
    const body = payload;
    return request(url, method, {}, body);
}

function addComment(dataUrl, payload) {
    const method = "POST";
    const url = dataUrl;
    const body = payload;
    return request(url, method, {}, body);
}

function getCommentslist(dataUrl,payload) {
    const method = "POST";
    const url = dataUrl;
    const body = payload;
    console.log(body)
    
    return request(url, method, {}, body);
}

export default {
    getPostslist,
    addPost,
    getPost,
    addComment,
    getCommentslist,
};