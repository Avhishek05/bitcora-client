import { call, put, takeEvery } from "redux-saga/effects";
import api from "../../services/apiModule";
import { addPostUrl } from "../../services/apiPoints";
import {
    ADD_POST,
    ADD_POST_SUCCESS,
    ADD_POST_FAILURE
} from "../constants";

function* addPost(action) {
    try {
        const data = yield call(addPostCall, action.payload);
        console.log("in saga", data);
        yield put({ type: ADD_POST_SUCCESS, payload: action.payload });
    } catch (e) {
        console.log(e, "error");
        yield put({ type: ADD_POST_FAILURE, payload: e });
    }
}
function* watchAddPosts() {
    yield takeEvery(ADD_POST, addPost);
}

export default watchAddPosts;

const addPostCall = async (payload) => {
    console.log("p",payload);
    const url = addPostUrl();
    console.log("url is", url);
    const res = await api.addPost(url,payload);
    console.log("response", res);
    if (res) {
        return res;
    } else {
        console.log("error aa rhi");
        return;
    }
};
