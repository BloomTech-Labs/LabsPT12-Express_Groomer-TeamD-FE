import React from 'react';
import './groomerdash-styles.scss';
import { Col, Row, Layout, Breadcrumb, Menu, Avatar } from 'antd';
import { Calendar } from 'antd';
import { Card } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { ServiceCheckBox } from './ServiceCheckBox';
import { PicUpload } from './Uploadpic';
import UserProfile from './UserProfile';
const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

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
                </Menu.ItemGroup>
              </SubMenu>
              <SubMenu title={<span>Sales</span>}>
                <Menu.ItemGroup key="business" title="">
                  <Content>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                      <Breadcrumb.Item>Happy Groomers Sales</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-card-wrapper">
                      <Row gutter={[16, 16]}>
                        <Col xs={24} sm={24} md={6}>
                          <Card
                            title="Total Entries this month"
                            bordered
                            actions={[
                              <SettingOutlined key="setting" />,
                              <EditOutlined key="edit" />,
                              <EllipsisOutlined key="ellipsis" />,
                            ]}
                          ></Card>
                        </Col>
                        <Col xs={12} sm={24} md={50}>
                          <Card title="Monthly Sales" bordered={false}>
                            $8,000.00
                          </Card>
                        </Col>
                        <Col xs={12} sm={24} md={50}>
                          <Card title="Weekly Sales" bordered={false}>
                            $2000.00
                          </Card>
                        </Col>
                        <Col xs={12} sm={24} md={50}>
                          <Card title="Top Sale" bordered={false}>
                            Credit card payment: $4,000.00
                          </Card>
                        </Col>
                      </Row>
                    </div>
                  </Content>
                </Menu.ItemGroup>
              </SubMenu>
              <SubMenu title={<span>Services</span>}>
                <Menu.ItemGroup key="business" title="">
                  <ServiceCheckBox />
                </Menu.ItemGroup>
              </SubMenu>
              <SubMenu title={<span>Upload Picture </span>}>
                <Menu.ItemGroup key="business" title="">
                  <Menu.Item key="PictureUpload">
                    {<PicUpload />} Upload Picture
                  </Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ padding: '0 100px' }}>
              <Breadcrumb style={{ margin: '12px 0' }}></Breadcrumb>
              <h1>Appointment Calander</h1>
              <UserProfile />
              <Calendar />
              <div
                style={{
                  background: '#fff',
                  padding: 24,
                  height: 580,
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
