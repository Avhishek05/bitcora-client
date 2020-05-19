/**
 * Created by Abhi on 03-05-2020.
 */
import { combineReducers } from "redux";
import AuthReducers from './auth-reducer';
import GetPostsReducer from './getPosts';
import AddPostReducer from './addPost';
import GetPostReducer from './getPost';
import AddCommentReducer from './addComment';
import GetCommentReducer from './getComments'

export default combineReducers({
    auth  : AuthReducers,
    posts : GetPostsReducer,
    addPost: AddPostReducer,
    post : GetPostReducer,
    addComment : AddCommentReducer,
    comments : GetCommentReducer,
});