import { call, put, takeEvery } from "redux-saga/effects";
import api from "../../services/apiModule";
import { fetchLoginUrl } from "../../services/apiPoints";
import {
    PERFORM_LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILED
} from "../constants";

function* login(action) {
    try {
        const data = yield call(loginCall, action.payload);
        console.log("in saga", data);
        yield put({ type: LOGIN_SUCCESS, payload: data });
    } catch (e) {
        console.log(e, "error");
        yield put({ type: LOGIN_FAILED, payload: e });
    }
}
function* watchLogin() {
    yield takeEvery(PERFORM_LOGIN, login);
}

export default watchLogin;

const loginCall = async (payload) => {
    console.log("p",payload);
    const url = fetchLoginUrl();
    console.log("url is", url);
    const res = await api.login(url,payload);
    console.log("response", res);
    if (res) {
        return res;
    } else {
        console.log("error aa rhi");
        return;
    }
};
