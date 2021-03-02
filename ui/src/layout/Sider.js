import React, {useState} from 'react';
import { Layout, Menu } from 'antd';
import {
    PictureOutlined,
    SmileOutlined,
    YoutubeOutlined
} from '@ant-design/icons';

import './Sider.css';
import {CHARACTERS_PAGE, EPISODES_PAGE, LOCATIONS_PAGE, START_PAGE} from '../constants/Paths';

const { Header, Sider, Content } = Layout;

const PageSider = ({component}) => {

    const [selectedItem, setSelectedItem] = useState(window.location.pathname);

    const onLogOutClick = () => {
        localStorage.removeItem('accessToken');
        window.location.replace(START_PAGE);
    };

    const menuItemClick = (item) => {
        setSelectedItem(item.key);
        window.location.replace(item.key);
    };

    return (
        <Layout className="page-header">
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" onClick={onLogOutClick} style={{float: 'right'}}>
                    <Menu.Item key="1">Log out</Menu.Item>
                </Menu>
            </Header>
            <Layout style={{minHeight: '93.5vh'}}>
                <Sider>
                    <Menu theme="dark" mode="inline" selectedKeys={selectedItem} onClick={menuItemClick}>
                        <Menu.Item key={CHARACTERS_PAGE} icon={<SmileOutlined />}>
                            Characters
                        </Menu.Item>
                        <Menu.Item key={LOCATIONS_PAGE} icon={<PictureOutlined />}>
                            Locations
                        </Menu.Item>
                        <Menu.Item key={EPISODES_PAGE} icon={<YoutubeOutlined />}>
                            Episodes
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '24px 24px 24px' }}>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: '100%',
                        }}
                    >
                        {component}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
};

export default PageSider;