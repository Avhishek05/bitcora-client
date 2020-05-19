import React from "react";
import {Avatar, Card, Col, Row} from "antd";
import {TwitterOutlined, FacebookOutlined, LinkedinOutlined, BookOutlined} from '@ant-design/icons';

const {Meta} = Card;

export default class UserDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <Row>
                <Col span={6}>
                    <Card style={{width: 180, border: 0}}>
                        <Meta
                            style={{}}
                            avatar={
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                            }
                            title="Abhishek Yadav"
                            description="@avhishek_ydv"
                        />
                    </Card>
                </Col>
                <Col offset={3} span={1}>
                    <TwitterOutlined />
                </Col>
                <Col span={1}>
                    <FacebookOutlined />
                </Col>
                <Col span={1}>
                    <LinkedinOutlined />
                </Col>
                <Col span={1}>
                    <BookOutlined />
                </Col>
            </Row>
        );
    }
}
