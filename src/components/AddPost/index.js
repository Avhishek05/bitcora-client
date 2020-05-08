import React from "react";
import {Button, Input} from "antd";
import "./styles.scss";
import {withRouter} from "react-router-dom";
import posts from "../../dummyData/posts.json"

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
                    <Input style={{height:200}}/>
                    <Button onClick={ this.savePost}
                    >Add</Button>
                </div>
        );
    }
}
export default withRouter(AddPost);