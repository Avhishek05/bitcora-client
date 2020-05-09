import request from "./request";

function getPostslist(dataUrl) {
    const method = "GET";
    const url = dataUrl;

    return request(url, method, {}, {});
}
export default {
    getPostslist,
};