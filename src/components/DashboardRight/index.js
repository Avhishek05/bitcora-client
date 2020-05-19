import React from "react";
import "./styles.scss";
import {withRouter} from "react-router-dom";

class DashboardRight extends React.Component {

    componentDidMount(){

    }

    render() {
        return (
            <div className="right">
           <p>Hiiiiiiiiiiiii</p>
            </div>
        );
    }
}


// mapDispatchToProps pass actions to props and dispatch action
export default withRouter(DashboardRight);
