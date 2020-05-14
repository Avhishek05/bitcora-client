/**
 * Created by Abhi on 03-05-2020.
 */
import { combineReducers } from "redux";
import AuthReducers from './auth-reducer';
import GetPostsReducer from './getPosts';
import AddPostReducer from './addPost';
import GetPostReducer from './getPost';
export default combineReducers({
    auth  : AuthReducers,
    posts : GetPostsReducer,
    addPost: AddPostReducer,
    post : GetPostReducer,
});