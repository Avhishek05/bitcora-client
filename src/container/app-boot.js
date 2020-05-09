/**
 * Created by Abhi on 03-05-2020.
 */
import React from "react";
import AppRoutes from "../routes/routers";
import { createStore } from 'redux'
import rootReducer from '../store/reducers/index'
import {Provider} from "react-redux";
import {store} from "../store/index"
export default class AppBootUp extends React.Component<> {

    render() {
        return (
            <Provider store={store}>
            <AppRoutes/>
            </Provider>
        );
    }
}
