/**
 * Created by Abhi on 07-05-2020.
 */
import React from "react";
import {Layout} from "antd";
import {withRouter} from "react-router-dom";
import BitcoraHeader from "../Header/index";

const {Content, Header} = Layout;

class BasicLayout extends React.Component {

    render() {
        return (
            <div style={{marginLeft: '8%', marginRight: '8%'}}>
                <Header style={{backgroundColor: "#FFF"}}>
                    <BitcoraHeader />
                </Header>
                <Layout style={{display: 'block', backgroundColor: '#FFF'}}>
                    <Content>{this.props.component}</Content>
                </Layout>
            </div>
        );
    }
}

export default withRouter(BasicLayout);
