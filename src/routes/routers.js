import React from "react";
import {
    Route,
    Switch,
    BrowserRouter as Router,
    Redirect
} from "react-router-dom";
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
    console.log(process.env.REACT_APP_BASE_URL);
    return (
        <Router>
            <Switch>
                {routesConfig.map(config => {
                    return (
                        <Route
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

export default AppRoutes;
