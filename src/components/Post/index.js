import React from "react";
import {connect} from "react-redux";
import AddComment from "../../components/Common/AddComment/index";
import UserDetail from "../Common/userDetails/index";
import {getPost} from "../../store/actions/actions";
import {withRouter} from "react-router-dom";
import FetchComments from "../Common/FetchCommets/index";

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const params = new URLSearchParams(this.props.location.search);
        let postId = params.get('id');
        this.props.getPost(postId);
    }

    render() {
        const {post} = this.props;
        return (
            <div>
                <UserDetail/>
                <h3>{post.title}</h3>
                <h5>{post.subTitle}</h5>
                <p>{post.content}</p>
                <AddComment />
                <p>Comments : </p>
                <FetchComments/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        post: state.post.post,
        loader: state.post.loader,
    };
};

const mapDispatchToProps = (dispatch) => ({
    getPost: (postId) => dispatch(getPost(postId)),
    dispatch,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));
