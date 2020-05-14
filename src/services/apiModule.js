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

function addPost(dataUrl) {
    const method = "POST";
    const url = dataUrl;

    return request(url, method, {}, {});
}
export default {
    getPostslist,
    addPost,
    getPost,
};