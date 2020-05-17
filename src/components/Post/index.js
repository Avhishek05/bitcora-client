import React from "react";
import {connect} from "react-redux";
import {getPost} from "../../store/actions/actions";
import post from "../../dummyData/post.json"
class Post extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount (){
    }

    render(){
        const { post } = this.props;
        return (
            <div>
                <h3>{post.title}</h3>
                <h5>{post.subTitle}</h5>
                <p>{post.content}</p>
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
