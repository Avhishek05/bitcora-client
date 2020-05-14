import React from "react";
import {connect} from "react-redux";
import {Col, Row} from "antd";
import {getPostslist} from "../../store/actions/actions";
import wallImg from "../../assets/fake-data/images/pic_wall.jpg"
import bookImg from "../../assets/fake-data/images/pic_books.jpg"
import posts from "../../dummyData/posts.json"
import "./styles.scss"
import {withRouter} from "react-router-dom";

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount(){
        this.props.dispatch(getPostslist());
    }

    openThisPost =()=>{
        this.props.history.push("/home/userName/postTitle");
    };

    render() {
        return (
            <div>
                { !this.props.loader?(
                    posts.map((item, index) => {
                            return (
                                <div key={index} style={{padding: 10}} onClick={ this.openThisPost}>
                                    <Row gutter={[24,24]} className="post">
                                        <Col span={20}>
                                            <h3>{item.title}</h3>
                                            <h5>{item.subTitle}</h5>
                                            <p>{item.content}</p>
                                        </Col>
                                        <Col span={4}>
                                            { index/2===0 &&
                                            <img className="img" src={bookImg} alt="a"/> }
                                            { index/2!==0 &&
                                            <img className="img" src={wallImg} alt="b"/>}
                                        </Col>
                                    </Row>
                                    <hr/>
                                </div>
                            );
                        }
                    )):null
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.posts.postLists,
        loader : state.posts.loader,
    };
};

const mapDispatchToProps = (dispatch) => ({
    getPostslist: () => dispatch(getPostslist()),
    dispatch
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));
