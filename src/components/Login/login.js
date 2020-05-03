/**
 * Created by Abhi on 03-05-2020.
 */
import React from "react";
import {connect} from 'react-redux';
import {emailChanged} from "../../store/actions/actions";
import Login from 'ant-design-pro/lib/Login';
import { Alert, Checkbox } from "antd";
import './styles.scss'
const { Tab, UserName, Password, Mobile, Captcha, Submit } = Login;
class LoginUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            notice: '',
            type: 'tab2',
            autoLogin: true,
        };
    }
    onEmailChange = (event)=>{
        this.props.emailChanged(event.target.value);
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
                    if (!err && (values.username !== 'admin' || values.password !== '888888')) {
                        setTimeout(() => {
                            this.setState({
                                notice: 'The combination of username and password is incorrect!',
                            });
                        }, 500);
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
    changeAutoLogin = e => {
        this.setState({
            autoLogin: e.target.checked,
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
                        <Tab key="tab1" tab="Account">
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
                        </Tab>
                        <Tab key="tab2" tab="Mobile">
                            <Mobile name="mobile" />
                            <Captcha onGetCaptcha={() => console.log('Get captcha!')} name="captcha" />
                        </Tab>
                        <div>
                            <Checkbox checked={this.state.autoLogin} onChange={this.changeAutoLogin}>
                                Keep me logged in
                            </Checkbox>
                            <a style={{ float: 'right' }} href="">
                                Forgot password
                            </a>
                        </div>
                        <Submit>Login</Submit>
                        <div>
                            Other login methods
                            <span className="icon icon-alipay" />
                            <span className="icon icon-taobao" />
                            <span className="icon icon-weibo" />
                            <a style={{ float: 'right' }} href="">
                                Register
                            </a>
                        </div>
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
export default connect(mapStateToProps, {emailChanged})(LoginUser);
