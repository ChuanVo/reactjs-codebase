import React, { useState, useEffect } from 'react';
import {Routes, Route, Link, useNavigate } from 'react-router-dom';
import Login from '../login';
import {
  UserOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import Gallery from '../gallery';
import {GALLERY_DATA} from '../../data/default-data'

const { Sider, Content } = Layout;



const Dashboard = () => {
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false);

  useEffect(function() {
    const isLogin = localStorage.getItem("isLogin")
    console.log('isLogin: ', isLogin)

    if (isLogin !== 'true') {
      navigate('/login')
    }
  })


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
              icon: <Link to={'/dashboard/profile'}><InfoCircleOutlined /> </Link> ,
              label: 'Profile',
            },
            {
              key: '2',
              icon:  <Link to={'/dashboard/gallery'}><UserOutlined /></Link>,
              label: 'Gallery',
            }
          ]}
        />
      </Sider>
      <Layout>   
        <Routes>        
          <Route path='gallery' element={<Gallery data={GALLERY_DATA}/>} />
          <Route path='profile' element={<>profile</>} />
        </Routes>


      </Layout>
    </Layout>
  );
};
export default Dashboard;