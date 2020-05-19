/**
 * Created by Abhi on 03-05-2020.
 */
import {combineReducers} from "redux";
import GetPostsReducer from "./getPosts";
import AddPostReducer from "./addPost";
import GetPostReducer from "./getPost";
import AddCommentReducer from "./addComment";
import searchedText from "./searchText";

export default combineReducers({
    posts : GetPostsReducer,
    addPost: AddPostReducer,
    post : GetPostReducer,
    addComment : AddCommentReducer,
    searchedText: searchedText
});