import { call, put, takeEvery } from "redux-saga/effects";
import api from "../../services/apiModule";
import { fetchRegisterUrl } from "../../services/apiPoints";
import {
    PERFORM_SIGNUP,
    SIGNUP_SUCCESS,
    SIGNUP_FAILED
} from "../constants";

function* register(action) {
    try {
        const data = yield call(registerCall, action.payload);
        console.log("in saga", data);
        yield put({ type: SIGNUP_SUCCESS, payload: data });
    } catch (e) {
        console.log(e, "error");
        yield put({ type: SIGNUP_FAILED, payload: e });
    }
}
function* watchRegister() {
    yield takeEvery(PERFORM_SIGNUP, register);
}

export default watchRegister;

const registerCall = async (payload) => {
    console.log("p",payload);
    const url = fetchRegisterUrl();
    console.log("url is", url);
    const res = await api.register(url,payload);
    console.log("response", res);
    if (res) {
        return res;
    } else {
        console.log("error aa rhi");
        return;
    }
};
