import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import { Avatar } from 'antd';
import { Menu } from 'antd';
import './dashboard-styles.scss';
// import '../../assets/dogLogo.png';
// import Search from '../pages/search/Search';
import PetUpload from './PetUpload';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

function Dashboard() {
  return (
    <div>
      <Layout>
        <Header style={{ background: 'white', padding: '10px' }}>
          <Avatar
            style={{ float: 'right', mar: '5px' }}
            src="https://icon-library.net/images/small-dog-icon/small-dog-icon-6.jpg"
          />
          <img
            src="/static/media/logo.15ae1571.png"
            alt="logo"
            style={{ width: '200px', marginBottom: '15px' }}
          ></img>
        </Header>
        <Layout>
          <Sider>
            <Menu
              style={{ background: '#9CD4E3' }}
              defaultSelectedKeys={['Dashboard']}
              mode="inline"
            >
              <Menu.Item
                style={{ background: '#9CD4E3', color: 'white' }}
                key="Dashboard"
              >
                Dashboard
              </Menu.Item>
              <SubMenu title={<span>Groomers</span>}>
                <Menu.ItemGroup key="groomers" title="">
                  <Menu.Item key="searchForGroomer">Find Groomers</Menu.Item>
                  <Menu.Item key="favoriteGroomer">My Groomers</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
              <SubMenu title={<span>My Pets</span>}>
                <Menu.ItemGroup key="pets" title="">
                  <Menu.Item key="searchForGroomer">Add Pets</Menu.Item>
                  <Menu.Item key="favoriteGroomer">View Pets</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item> */}
              </Breadcrumb>
              <div
                style={{
                  background: '#fff',
                  padding: 24,
                  minHeight: 580,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                }}
              >
                <PetUpload />

                {/* <Search /> */}
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Express Groomer ©2020{' '}
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default Dashboard;
