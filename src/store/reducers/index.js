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
import searchedText from "./searchText";

export default combineReducers({
    posts : GetPostsReducer,
    addPost: AddPostReducer,
    post : GetPostReducer,
    addComment : AddCommentReducer,
    comments : GetCommentReducer,
    searchedText: searchedText
});