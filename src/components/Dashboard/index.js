import React from "react";
import {connect} from "react-redux";
import {Col, Row} from "antd";
import {getPostslist} from "../../store/actions/actions";
import wallImg from "../../assets/fake-data/images/pic_wall.jpg";
import bookImg from "../../assets/fake-data/images/pic_books.jpg";
import "./styles.scss";
import {withRouter} from "react-router-dom";
import DashboardRight from "../DashboardRight";
import _ from "lodash";

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.getPostslist();
    }

    openThisPost = (postId) => {
        this.props.history.push({
            pathname: "/home/userName/post",
            search: `?id=${postId}`
        });
    };

    filter = () => {
        let d = _.filter(this.props.data, (post) => !_.isUndefined(post.title))
        let text = _.get(this.props, 'searchedText', "");
        return _.filter(d, (post) => _.isUndefined(post.title) || post.title.toLowerCase().indexOf(text) >= 0
        || _.isUndefined(post.subTitle) || post.subTitle.toLowerCase().indexOf(text) >= 0
        || _.isUndefined(post.content) || post.content.toLowerCase().indexOf(text) >= 0)
    };

    render() {
        return (
            <Row>
                <Col span={18}>
                    { !this.props.loader ? (
                        this.filter().map((item, index) => {
                                return (
                                    <div key={index} style={{padding: 10}} onClick={() => this.openThisPost(item._id)}>
                                        <Row gutter={[24, 24]} className="post">
                                            <Col span={20}>
                                                <h3>{item.title}</h3>
                                                <h5>{item.subTitle}</h5>
                                                <p>{_.get(item, 'content', "").length > 100 ? item.content.substring(0, 100) + '...' : item.content}</p>
                                            </Col>
                                            <Col span={4}>
                                                { index / 2 === 0 &&
                                                <img className="img" src={bookImg} alt="a"/> }
                                                { index / 2 !== 0 &&
                                                <img className="img" src={wallImg} alt="b"/>}
                                            </Col>
                                        </Row>
                                        <hr/>
                                    </div>
                                );
                            }
                        )) : null
                    }
                </Col>
                <Col span={6}>
                    <DashboardRight />
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = (state) => {
    console.log("state", state)
    return {
        data: state.posts.postLists,
        loader: state.posts.loader,
        searchedText: state.searchedText.value
    };
};

const mapDispatchToProps = (dispatch) => ({
    getPostslist: () => dispatch(getPostslist()),
    dispatch
});
// mapDispatchToProps pass actions to props and dispatch action
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));
