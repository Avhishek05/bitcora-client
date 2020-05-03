/**
 * Created by Abhi on 03-05-2020.
 */
import { combineReducers } from "redux";
import AuthReducers from './auth-reducer';

export default combineReducers({
    auth  : AuthReducers,
});