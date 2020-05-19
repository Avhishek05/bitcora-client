/**
 * Created by Abhi on 03-05-2020.
 */
import React from "react";
import {connect} from "react-redux";
import {searchText} from "../../store/actions/actions";
import {Button} from "antd";
import "./styles.scss";
class LoginUser extends React.Component {

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
        };

};
export default connect(mapStateToProps, {searchText})(LoginUser);
