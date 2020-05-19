import React from "react";
import {connect} from "react-redux";
import AddComment from "../../components/Common/AddComment/index";
import dummyPost from "../../dummyData/post.json"
import _ from "lodash";
import UserDetail from "../Common/userDetails/index";

class Post extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount (){
        console.log(dummyPost)
    }

    render(){
        const { post } = this.props;
        return (
            <div>
                <UserDetail/>
                <h3>{post.title}</h3>
                <h5>{post.subTitle}</h5>
                <p>{post.content}</p>
                <AddComment />
                    {
                _.map(_.get(dummyPost,'comments',[]),(item)=>{
                    return <p key={item.id}>{item.comment}</p>
            })}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        post: state.post.post,
        loader : state.post.loader,
    };
};

const mapDispatchToProps = (dispatch) => ({
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
