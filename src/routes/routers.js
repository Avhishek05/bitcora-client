import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Login from "../components/Login/login"

const routesConfig = [
    {
        path: "/",
        component: Login,
        name: "Login",
        exact: true
    }
];

const AppRoutes = () => {
    return (
        <Router>
            <Switch>
                {routesConfig.map(config => {
                    return (
                        <Route
                            exact={config.exact && true}
                            key={`${config.name}`}
                            path={config.path}
                            render={(props) => {
                                const ComponentToRender = config.component;
                                return <ComponentToRender {...props} />;
                            }}
                        />
                    );
                })}
                <Redirect to="/" />
            </Switch>
        </Router>
    );
};

export default AppRoutes;;
