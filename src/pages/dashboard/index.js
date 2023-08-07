import React, { useState } from 'react';
import {Routes, Route, Link } from 'react-router-dom';
import Login from '../login';
import {
  UserOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
const { Sider, Content } = Layout;
const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <InfoCircleOutlined />,
              label: 'Profile',
            },
            {
              key: '2',
              icon:  <Link to={'/login'}><UserOutlined /></Link>,
              label: 'Gallery',
            }
          ]}
        />
      </Sider>
      <Layout>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: '100vh',
            background: colorBgContainer,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};
export default Dashboard;