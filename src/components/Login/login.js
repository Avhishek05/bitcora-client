/**
 * Created by Abhi on 03-05-2020.
 */
import React from "react";
import {connect} from 'react-redux';
import {emailChanged} from "../../store/actions/actions";

class Login extends React.Component {

    onEmailChange = (text)=>{
        this.props.emailChanged(text);
    };
    render() {
        return (
            <div>
                <p>
                    { this.props.email}
                </p>
                <input value={ this.props.email } onChange={this.onEmailChange}/>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        email: state.auth.email,
    };

};
export default connect(mapStateToProps, {emailChanged})(Login);
