import { call, put, takeEvery } from "redux-saga/effects";
import api from "../../services/apiModule";
import { postsListUrl } from "../../services/apiPoints";
import {
    GET_POSTS,
    GET_POSTS_SUCCESS,
    GET_POSTS_FAILURE
} from "../constants";

function* getPosts(action) {
    try {
        const data = yield call(fetchPostsCall);
        console.log("in saga", data);
        yield put({ type: GET_POSTS_SUCCESS, payload: data });
    } catch (e) {
        console.log(e, "error");
        yield put({ type: GET_POSTS_FAILURE, payload: e });
    }
}
function* watchGetPosts() {
    yield takeEvery(GET_POSTS, getPosts);
}

export default watchGetPosts;

const fetchPostsCall = async () => {
    const url = postsListUrl();
    console.log("url is", url);
    const res = await api.getPostslist(url);
    console.log("response", res);
    if (res) {
        return res;
    } else {
        console.log("error aa rhi");
        return;
    }
};
