/**
 * Created by Abhi on 03-05-2020.
 */
import React from "react";
import {connect} from "react-redux";
import {textChanged} from "../../store/actions/actions";
import {Button} from "antd";
import "./styles.scss";
class LoginUser extends React.Component {

    constructor(props) {
        super(props);
    }

    onSubmit = () => {
      this.props.history.push("/home");
    };

    render() {
        return (
            <div>
                <div className="login-warp login-component">
                    <Button type="primary" title="Go" onClick={this.onSubmit}>GO</Button>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        email: state.auth.email,
    };

};
export default connect(mapStateToProps, {textChanged})(LoginUser);
