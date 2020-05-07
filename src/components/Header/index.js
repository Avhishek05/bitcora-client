import React from "react";
import {Row, Col, Icon, Card, Avatar, Popover } from "antd";
import "./styles.scss"
const { Meta } = Card;

export default class BitcoraHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

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
                    <ul>
                        <li>Add new post</li>
                        <li>Show my details</li>
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
                            <Icon type="search" />
                        </Col>
                        <Col span={6}>
                            <Icon type="save" />
                        </Col>
                        <Col span={6}>
                            <Icon type="bell" />
                        </Col>
                        <Col span={6}>
                            <Popover placement="bottom" content={this.userDetails()} trigger="click">
                            <Icon type="user"/>
                            </Popover>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }



}

