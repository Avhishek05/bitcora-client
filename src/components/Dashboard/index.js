/**
 * Created by Abhi on 07-05-2020.
 */

import React from "react";
import posts from "../../dummyData/posts.json"
import {Row, Col} from "antd"

export default class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                {
                    posts.map((item, index) => {
                            return (
                                <div>
                                    <Row key={index} gutter={16}>
                                        <Col span={6}>{item.id}</Col>
                                        <Col span={4}>{item.title}</Col>
                                        <Col span={4}>{item.subTitle}</Col>
                                        <Col span={1}>{item.userId}</Col>
                                        <Col span={9}>{item.content}</Col>
                                    </Row>
                                    <hr />
                                </div>
                            );
                        }
                    )
                }
            </div>
        );
    }

}

