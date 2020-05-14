import {all} from "redux-saga/effects";
import watchGetPosts from "./fetchPosts";
import watchGetPost from "./fetchPost";

const rootSaga = function* rootSaga() {
    yield all([
        watchGetPosts(),
        watchGetPost(),
    ]);
};

export default rootSaga;
