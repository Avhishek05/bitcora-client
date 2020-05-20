import React from "react";
import {Row, Col, Card, Avatar, Popover, Input} from "antd";
import {SearchOutlined, UserOutlined, BellOutlined, BookOutlined} from '@ant-design/icons';
import "./styles.scss"
import {withRouter} from "react-router-dom";
import {searchText} from "../../store/actions/actions"
import {connect} from "react-redux";

const {Meta} = Card;

class BitcoraHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchVisible: false,
        };
    }

    addPost = () => {
        this.props.history.push("/home/addPost")
    };

    goToProfile = () => {
        this.props.history.push("/home/profile")

    };

    onSearchTextChange = (e) => {
        this.props.searchText(e.target.value);
    };

    userDetails = () => {
        return (
            <Card style={{width: 180, border: 0}}>
                <Meta
                    style={{}}
                    avatar={
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                    }
                    title="Abhishek Yadav"
                    description="@avhishek_ydv"
                />
                <div>
                    <ul className="user-actions">
                        <hr/>
                        <li className="user-action-item" onClick={this.addPost}>Add new post</li>
                        <li className="user-action-item" onClick={this.goToProfile}>Profile</li>
                        <li>Stats</li>
                        <li>Log Out</li>
                    </ul>
                </div>
            </Card>);
    };

    render() {
        return (
            <Row className="header">
                <Col span={2} onClick={() => this.props.history.push("/home/dashboard")} style={{cursor: 'pointer'}}>
                    <h1>BLOG</h1>
                </Col>
                <Col offset={3} span={13}>
                    { this.state.searchVisible &&
                    <Input onChange={this.onSearchTextChange}/>
                    }
                </Col>
                <Col offset={2} span={4}>
                    <Row gutter={16}>
                        <Col span={6}>
                            <SearchOutlined onClick={() => this.setState({searchVisible: !this.state.searchVisible})}/>
                        </Col>
                        <Col span={6}>
                            <BookOutlined />
                        </Col>
                        <Col span={6}>
                            <BellOutlined />
                        </Col>
                        <Col span={6}>
                            <Popover placement="bottom" content={this.userDetails()} trigger="hover">
                                <UserOutlined/>
                            </Popover>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}
const mapDispatchToProps = (dispatch) => ({
    searchText: (v) => dispatch(searchText(v)),
    dispatch,
});

export default withRouter(connect(null, mapDispatchToProps)(BitcoraHeader));
