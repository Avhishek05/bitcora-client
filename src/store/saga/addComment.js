import { call, put, takeEvery } from "redux-saga/effects";
import api from "../../services/apiModule";
import { addCommentUrl } from "../../services/apiPoints";
import {
    ADD_COMMENT,
    ADD_COMMENT_SUCCESS,
    ADD_COMMENT_FAILURE
} from "../constants";

function* addComment(action) {
    try {
        const data = yield call(addCommentCall, action.payload);
        console.log("Add comment in saga", data);
        yield put({ type: ADD_COMMENT_SUCCESS, payload: data });
    } catch (e) {
        console.log(e, "error");
        yield put({ type: ADD_COMMENT_FAILURE, payload: e });
    }
}
function* watchAddComment() {
    yield takeEvery(ADD_COMMENT, addComment);
}

export default watchAddComment;

const addCommentCall = async (payload) => {
    console.log("p",payload);
    const url = addCommentUrl();
    console.log("url is", url);
    const res = await api.addComment(url,payload);
    console.log("response", res);
    if (res) {
        return res;
    } else {
        console.log("error aa rhi");
        return;
    }
};
