/**
 * Created by Abhi on 07-05-2020.
 */

import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Dashboard from "../Dashboard/index";
import BasicLayout from "../BasicLayout/index"
import AddPost from "../AddPost/index";
import Post from "../Post/index";
import Profile from "../Profile/index";
export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/home">
                        <Redirect to="/home/dashboard" />
                    </Route>
                    <Route path={"/home/dashboard"}>
                        <BasicLayout component={<Dashboard />} />
                    </Route>
                    <Route path={"/home/addPost"}>
                        <BasicLayout component={<AddPost />} />
                    </Route>
                    <Route path={"/home/profile"}>
                        <BasicLayout component={<Profile />} />
                    </Route>
                    <Route path={"/home/userName/post"}>
                        <BasicLayout component={<Post />} />
                    </Route>

                    {/*<Route exact path="/otherPage">*/}
                        {/*<Redirect to="/otherPage" />*/}
                    {/*</Route>*/}
                </Switch>
            </div>
        );
    }

}

