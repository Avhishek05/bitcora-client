/**
 * Created by Abhi on 03-05-2020.
 */
import { combineReducers } from "redux";
import GetPostsReducer from './getPosts';
import AddPostReducer from './addPost';
import GetPostReducer from './getPost';
import AddCommentReducer from './addComment';
import GetCommentReducer from './getComments'
import searchedText from "./searchText";
import login from "./login";
import register from "./register";

export default combineReducers({
    posts : GetPostsReducer,
    addPost: AddPostReducer,
    post : GetPostReducer,
    addComment : AddCommentReducer,
    comments : GetCommentReducer,
    searchedText: searchedText,
    user:login,
    register: register,
});