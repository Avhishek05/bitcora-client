import React from "react";
import {connect} from "react-redux";
import {Col, Row} from "antd";
import {getPostslist} from "../../store/actions/actions";
import bookImg from "../../assets/fake-data/images/pic_wall.jpg"
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
                { !this.props.loader?(
                    this.props.data.map((item, index) => {
                            return (
                                <div key={index} style={{padding: 10}}>
                                    <Row gutter={[24,24]}>
                                        <Col span={20}>
                                            <h3>{item.title}</h3>
                                            <h5>{item.subTitle}</h5>
                                            <p>{item.content}</p>
                                        </Col>
                                        <Col span={4}>
                                            <img style={{width:'80%'}} src={bookImg}/>
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
    console.log(state)
    return {
        data: state.posts.postLists,
        loader : state.posts.loader,
    };
};

const mapDispatchToProps = (dispatch) => ({
    getPostslist: () => dispatch(getPostslist()),
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
