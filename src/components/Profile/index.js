import React from "react";
import {Row,Col,Tag} from "antd";
import user_default from "../../assets/fake-data/images/user_default.png"
import {withRouter} from "react-router-dom";

class Profile extends React.Component{

    render(){
        return (
            <div style={{width: 680,margin:'auto'}}>
                <Row style={{height: 177}}>
                    <Col span={18}>
                        <Row>
                            <Col span={12}><h1>John Doe</h1></Col>
                            <Col span={12}><Tag>Edit profile</Tag></Col>
                        </Row>
                        <Row>
                            <Col span={12}>0 Following</Col>
                        </Row>

                    </Col>
                    <Col span={6}>
                        <img style={{width : 150}} src={user_default} alt="b"/>
                    </Col>
                </Row>
                <div><h5>My Posts</h5></div>
            </div>
        );
    }
}

export default withRouter(Profile);