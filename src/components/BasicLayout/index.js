/**
 * Created by Abhi on 07-05-2020.
 */
import React from "react";
import {Layout} from "antd";
import {withRouter} from "react-router-dom";

const { Content } = Layout;

class BasicLayout extends React.Component {

    render() {
        return (
            <div  className='basic-layout'>
                <Layout style={{ height: "100vh" }}>
                    <Layout>
                        <Content>{this.props.component}</Content>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default withRouter(BasicLayout);
