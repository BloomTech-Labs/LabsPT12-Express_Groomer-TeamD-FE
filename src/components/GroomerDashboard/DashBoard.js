import React from 'react';
import './groomerdash-styles.scss';
import { Layout, Breadcrumb, Menu, Avatar } from 'antd';
import { Card } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
const { Meta } = Card;

function GroomerDashBoard() {
  return (
    <div>
      <Layout>
        <Header style={{ background: 'white', padding: '10px' }}>
          <Avatar
            style={{ float: 'right', mar: '5px', background: '#9CD4E3' }}
            src=""
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
              <SubMenu title={<span>Clients</span>}>
                <Menu.ItemGroup key="clients" title="">
                  <Menu.Item key="clientlist">Client List</Menu.Item>
                  <Menu.Item key="sales">New Sales</Menu.Item>
                  <Menu.Item key="newtasks">New Tasks</Menu.Item>
                  <Menu.Item key="completedtasks">Completed Tasks</Menu.Item>
                  <Menu.Item key="clientreviews">Client Reviews</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
              <SubMenu title={<span>Profile Settings</span>}>
                <Menu.ItemGroup key="business" title="">
                  <Menu.Item key="services">Services</Menu.Item>
                  <Menu.Item key="location">Location</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}></Breadcrumb>
              <h1>Recent Clients</h1>
              <div
                style={{
                  background: '#fff',
                  padding: 24,
                  minHeight: 580,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                }}
              ></div>
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

export default GroomerDashBoard;
