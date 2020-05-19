import { call, put, takeEvery } from "redux-saga/effects";
import api from "../../services/apiModule";
import { fetchCommentsUrl } from "../../services/apiPoints";
import {
    GET_COMMENTS,
    GET_COMMENTS_SUCCESS,
    GET_COMMENTS_FAILURE
} from "../constants";


function* getComments(action) {
    try {
        const data = yield call(fetchCommentsCall,action.payload);
        console.log("in saga", data);
        yield put({ type: GET_COMMENTS_SUCCESS, payload: data });
    } catch (e) {
        console.log(e, "error");
        yield put({ type: GET_COMMENTS_FAILURE, payload: e });
    }
}
function* watchGetComments() {
    yield takeEvery(GET_COMMENTS, getComments);
}

export default watchGetComments;

const fetchCommentsCall = async (payload) => {
    console.log("pay",payload);
    const url = fetchCommentsUrl();
    console.log("url is", url);
    const res = await api.getCommentslist(url,payload);
    console.log("response", res);
    if (res) {
        return res;
    } else {
        console.log("error aa rhi");
        return;
    }
};
