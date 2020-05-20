import React from "react";
import "./styles.scss";
import {withRouter} from "react-router-dom";

class DashboardRight extends React.Component {

    componentDidMount() {

    }

    render() {
        return (
            <div className="right">
                <p>Here we are going to show</p>
                <p>Still not deiceded yet</p>
            </div>
        );
    }
}


// mapDispatchToProps pass actions to props and dispatch action
export default withRouter(DashboardRight);
