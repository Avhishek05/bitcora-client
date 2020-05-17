import React from "react";
import {Button, Form, Input} from "antd";
import "./styles.scss";
import {withRouter} from "react-router-dom";
import {addPost} from "../../store/actions/actions";
import {connect} from "react-redux";

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

    onSubmit = (values) => {
        let obj = {
            user :{
                id: "5eb667a72eedfc2a48cd3246"
            },
            post :{
                ...values
            }
        }
        console.log("props", this.props);
        this.props.dispatch(addPost(obj));
        // this.props.post(obj);
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
const mapStateToProps = (state) => {
    return {
        loader : state.addPost.loader,
        data : state.addPost.addPost,
    };
};

const mapDispatchToProps = (dispatch) => ({
    // post: (obj) => dispatch(addPost(obj)),
    dispatch
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddPost));
// export default withRouter(connect(mapStateToProps, addPost, dispatch)(AddPost));
