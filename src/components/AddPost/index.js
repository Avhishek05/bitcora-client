import React from "react";
import {Button, Col, Input, Row} from "antd";
import "./styles.scss";
import {withRouter} from "react-router-dom";
const { TextArea } = Input;

class AddPost extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    savePost =()=>{
        this.props.history.push("/home/dashboard");
    };

    render() {
        return (
                <div>
                    <Row>
                        <Col span={5}>Title</Col>
                        <Col span={4}> Subtitle</Col>
                    </Row>
                    <Row>
                        <Col span={5}><Input/></Col>
                        <Col span={4}><Input/></Col>
                    </Row>
                    <span>Content</span>
                    <TextArea rows={4} />
                    <Button onClick={ this.savePost}
                    >Add</Button>
                </div>
        );
    }
}
export default withRouter(AddPost);