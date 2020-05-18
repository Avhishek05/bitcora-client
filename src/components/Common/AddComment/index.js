import React from "react";
import {Button, Form, Input} from "antd";
import {withRouter} from "react-router-dom";
import {addComment} from "../../../store/actions/actions";
import {connect} from "react-redux";

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

class AddComment extends React.Component{

        constructor(props) {
            super(props);
            this.state = {};
        }
    
        onSubmit = (values) => {
            let obj = {
                user :{
                    id: "5eb1bce2dcdc67313469866a"
                },
                post :{
                    id : "5eb1bfbedf9ee32f4cfa0f35" 
                },
                comment : {
                    ...values
                }
            }
            console.log("props", this.props);
            // this.props.dispatch(addPost(obj));
            this.props.comment(obj);
            this.props.history.push("/home/dashboard");
        };
    
        render() {
            return (
                    <div>
                        <Form onFinish={this.onSubmit}>
                            Profile Name : Deepak
                            
                            <Form.Item
                                name="text"
                                label="text"
                                rules={[{ required: true, message: 'Please input Text!' }]}
                            >
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
        console.log("add comment returns",state);
        return {
            loader : state.addComment.loader,
            data : state.addComment.addComment,
        };
    };
    
    const mapDispatchToProps = (dispatch) => ({
        comment: (obj) => dispatch(addComment(obj)),
        dispatch
    });
    
    export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddComment));