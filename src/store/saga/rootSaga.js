import {all} from "redux-saga/effects";
import watchGetPosts from "./fetchPosts";
import watchGetPost from "./fetchPost";
import watchAddPosts from "./addPost";

const rootSaga = function* rootSaga() {
    yield all([
        watchGetPosts(),
        watchGetPost(),
        watchAddPosts(),
    ]);
};

export default rootSaga;
