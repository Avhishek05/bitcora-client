import React from "react";
import {connect} from "react-redux";
import {Col, Row,Card,Avatar} from "antd";
import {getCommentsList} from "../../../store/actions/actions";
import {withRouter} from "react-router-dom";
import _ from "lodash";

const {Meta} = Card;

class FetchComments extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount(){
        // I have added store in props thats why I am getting dispatch in props.
        // console.log("props",this.props);
        const req_body = {
            "post" : {
                "id" : "5eb1bfbedf9ee32f4cfa0f35"
            }
        }
        this.props.getCommentsList(req_body);
    }

    render() {
        return (
            <Row>
                <Col span={18}>
                    { !this.props.loader ? (
                        this.props.data.comments.map((item, index) => {
                            return (
                                <div key={item._id} style={{padding: 3}}>
                                    <Row gutter={[12, 12]} className="comment">
                                        <Col span={20}>
                                            <Card style={{width: 180, border: 0}}>
                                                <Meta
                                                    style={{}}
                                                    avatar={
                                                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                                                    }
                                                    title={item.UserDetails[0].name}
                                                    description={item.UserDetails[0].email}
                                                />
                                            </Card>
                                            
                                            <p>{item.text}</p>
                                            {/* <h5>{item.subTitle}</h5>
                                            <p>{_.get(item,'content',"").length>100?item.content.substring(0, 100) + '...' :item.content}</p> */}
                                        </Col>
                                        
                                    </Row>
                                    <hr/>
                                </div>
                            );
                            }
                        )) : null
                    }
                </Col>

            </Row>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.comments.commentList,
        loader : state.comments.loader,
    };
};

const mapDispatchToProps = (dispatch) => ({
    getCommentsList: (req_body) => dispatch(getCommentsList(req_body)),
    dispatch
});
// mapDispatchToProps pass actions to props and dispatch action
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FetchComments));
