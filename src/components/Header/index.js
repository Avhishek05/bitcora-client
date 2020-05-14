import React from "react";
import {Row, Col, Card, Avatar, Popover } from "antd";
import { SearchOutlined, UserOutlined, BellOutlined, SaveOutlined  } from '@ant-design/icons';
import "./styles.scss"
import {withRouter} from "react-router-dom";

const { Meta } = Card;

class BitcoraHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    addPost = ()=>{
        this.props.history.push("/home/addPost")
    };

    userDetails = () => {
        return (
            <Card style={{ width: 180, border:0}}>
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
                        <li>Profile</li>
                        <li>Stats</li>
                        <li>Log Out</li>
                    </ul>
                </div>
            </Card>);
    };

    render() {
        return (
            <Row className="header">
                <Col span={20}>
                    <h1>BLOG</h1>
                </Col>
                <Col span={4}>
                    <Row gutter={16}>
                        <Col span={6}>
                            <SearchOutlined />
                        </Col>
                        <Col span={6}>
                            <SaveOutlined />
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

export default withRouter(BitcoraHeader);

