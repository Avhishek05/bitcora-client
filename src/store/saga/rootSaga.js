import {all} from "redux-saga/effects";
import watchGetPosts from "./fetchPosts";

const rootSaga = function* rootSaga() {
    yield all([
        watchGetPosts()
    ]);
};

export default rootSaga;
