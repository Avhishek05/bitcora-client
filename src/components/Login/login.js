/**
 * Created by Abhi on 03-05-2020.
 */
import React from "react";
import {connect} from "react-redux";
import {textChanged} from "../../store/actions/actions";
import Login from "ant-design-pro/lib/Login";
import {Alert} from "antd";
import "./styles.scss";
const { Tab, UserName, Password, Submit } = Login;
class LoginUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            notice: '',
            type: 'tab1',
            autoLogin: true,
        };
    }
    onEmailChange = (event)=>{
        this.props.textChanged(event.target.value);
    };

    onPasswordChange = (event)=>{
        this.props.textChanged(event.target.value);
    };
    onSubmit = (err, values) => {
        console.log('value collected ->', {
            ...values,
            autoLogin: this.state.autoLogin,
        });
        if (this.state.type === 'tab1') {
            this.setState(
                {
                    notice: '',
                },
                () => {
                    if (!err && (values.username !== 'admin' || values.password !== '12345')) {
                        setTimeout(() => {
                            this.setState({
                                notice: 'The combination of username and password is incorrect!',
                            });
                        }, 500);
                    }
                    else{
                        this.props.history.push("/home/dashboard");
                    }
                }
            );
        }
    };


    onTabChange = key => {
        this.setState({
            type: key,
        });
    };

    render() {
        return (
            <div>
                <div className="login-warp login-component">
                    <Login
                        defaultActiveKey={this.state.type}
                        onTabChange={this.onTabChange}
                        onSubmit={this.onSubmit}
                    >
                        <Tab key="tab1" tab="Log In">
                            {this.state.notice && (
                                <Alert
                                    style={{ marginBottom: 24 }}
                                    message={this.state.notice}
                                    type="error"
                                    showIcon
                                    closable
                                />
                            )}
                            <UserName
                                name="username"
                                placeholder="Email"
                                setFieldsValue={this.props.email}
                                onChange={this.onEmailChange}/>
                            <Password name="password"
                                      placeholder="Password"
                                      setFieldsValue={this.props.email}

                                      onChange={this.onPasswordChange}/>
                        <Submit>Login</Submit>
                        </Tab>
                        <Tab key="tab2" tab="Sign Up">
                            {this.state.notice && (
                                <Alert
                                    style={{ marginBottom: 24 }}
                                    message={this.state.notice}
                                    type="error"
                                    showIcon
                                    closable
                                />
                            )}
                            <UserName name="username" />
                            <Password name="password" />
                            <Submit>Sign Up</Submit>
                        </Tab>
                    </Login>
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
