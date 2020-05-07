import React from "react";
import {Row, Col, Icon} from "antd";
export default class BitcoraHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Row>
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
                            <Icon type="user" />
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }

}

