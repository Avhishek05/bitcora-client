import { call, put, takeEvery } from "redux-saga/effects";
import api from "../../services/apiModule";
import { fetchPostUrl } from "../../services/apiPoints";
import {
    GET_POST,
    GET_POST_SUCCESS,
    GET_POST_FAILURE
} from "../constants";

function* getPost(action) {
    console.log("a", action);
    try {
        const data = yield call(fetchPostCall, action.payload);
        console.log("in saga", data);
        yield put({ type: GET_POST_SUCCESS, payload: data });
    } catch (e) {
        console.log(e, "error");
        yield put({ type: GET_POST_FAILURE, payload: e });
    }
}
function* watchGetPost() {
    yield takeEvery(GET_POST, getPost);
}

export default watchGetPost;

const fetchPostCall = async (postId) => {
    const url = fetchPostUrl(postId);
    console.log("url is", url);
    const res = await api.getPost(url);
    console.log("response", res);
    if (res) {
        return res;
    } else {
        console.log("error aa rhi");
        return;
    }
};
