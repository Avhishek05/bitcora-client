import {all} from "redux-saga/effects";
import watchGetPosts from "./fetchPosts";
import watchGetPost from "./fetchPost";
import watchAddPosts from "./addPost";
import watchAddComment from "./addComment";
import watchGetComments from './fetchComments'
import watchLogin from './login'
import watchRegister from './register'

const rootSaga = function* rootSaga() {
    yield all([
        watchGetPosts(),
        watchGetPost(),
        watchAddPosts(),
        watchAddComment(),
        watchGetComments(),
        watchLogin(),
        watchRegister(),
    ]);
};

export default rootSaga;
