import React from 'react';
import { Layout, Menu } from 'antd';
import './Layout.css';

const { Header } = Layout;

const HeaderLayout = (props) => {
    console.log(props);
    return (
        <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%', background: 'rgba(0, 0, 0, 0.4)' }}>
                <Menu theme="dark" mode="horizontal" style={{float: "right"}}>
                    <Menu.Item key="1">Log In</Menu.Item>
                    <Menu.Item key="2">Register</Menu.Item>
                </Menu>
            </Header>
        </Layout>
    )
};

export default HeaderLayout;