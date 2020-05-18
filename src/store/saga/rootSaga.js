import {all} from "redux-saga/effects";
import watchGetPosts from "./fetchPosts";
import watchGetPost from "./fetchPost";
import watchAddPosts from "./addPost";
import watchAddComment from "./addComment";


const rootSaga = function* rootSaga() {
    yield all([
        watchGetPosts(),
        watchGetPost(),
        watchAddPosts(),
        watchAddComment(),
    ]);
};

export default rootSaga;
