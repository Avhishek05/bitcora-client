import React from "react";
import {Button, Form, Input} from "antd";
import "./styles.scss";
import {withRouter} from "react-router-dom";

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};


class AddPost extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    onSubmit =(values)=>{
        console.log("asd", values);
        this.props.history.push("/home/dashboard");
    };




    render() {
        return (
                <div>
                    <Form {...layout}
                          onFinish={this.onSubmit}>
                        <Form.Item
                            label="Title"
                            name="title"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="SubTitle"
                            name="subTitle"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="content"
                            label="Content">
                            <Input.TextArea />
                        </Form.Item>
                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
        );
    }
}
export default withRouter(AddPost);