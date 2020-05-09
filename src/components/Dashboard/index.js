import React from "react";
import posts from "../../dummyData/posts.json";
import {Col, Row} from "antd";
import {getPostslist} from "../../store/actions/actions";
import {connect} from "react-redux";
class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount(){
        this.props.dispatch(getPostslist());
    }

    render() {
        return (
            <div>
                {
                    posts.map((item, index) => {
                            return (
                                <div key={index}>
                                    <Row  gutter={16}>
                                        <Col span={6}>{item.id}</Col>
                                        <Col span={4}>{item.title}</Col>
                                        <Col span={4}>{item.subTitle}</Col>
                                        <Col span={1}>{item.userId}</Col>
                                        <Col span={9}>{item.content}</Col>
                                    </Row>
                                    <hr />
                                </div>
                            );
                        }
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.postLists,
    };
};

const mapDispatchToProps = (dispatch) => ({
    // getPostslist: () => dispatch(getPostslist()),
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
