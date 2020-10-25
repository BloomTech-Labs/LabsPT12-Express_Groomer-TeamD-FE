import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import { Avatar } from 'antd';
import { Menu } from 'antd';
// import { UserOutlined } from '@ant-design/icons';
import './dashboard-styles.scss';
// import '../../assets/dogLogo.png';
import { Card } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
const { Meta } = Card;

function Dashboard() {
  return (
    <div>
      <Layout>
        <Header style={{ background: 'white', padding: '10px' }}>
          <Avatar
            style={{ float: 'right', mar: '5px', background: '#9CD4E3' }}
            src="https://cdn.icon-icons.com/icons2/2063/PNG/512/dog_animal_pet_bulldog_icon_124662.png"
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
                  <Menu.Item key="favoriteGroomer">
                    Favorited Groomers
                  </Menu.Item>
                  <Menu.Item key="pastGroomer">Past Groomers</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
              <SubMenu title={<span>Account Settings</span>}>
                <Menu.ItemGroup key="groomers" title="">
                  <Menu.Item key="searchForGroomer">Reviews</Menu.Item>
                  <Menu.Item key="favoriteGroomer">Update Location</Menu.Item>
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
              <h1>Featured Groomers</h1>
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
                <Card
                  hoverable
                  style={{ width: 240, height: 300 }}
                  cover={
                    <img
                      alt="example"
                      src="https://www.rover.com/blog/wp-content/uploads/2019/03/groomer-above-960x513.jpg"
                    />
                  }
                >
                  <Meta
                    title="Pawfection Pet Salon"
                    description="Mobile Services: Yes
    Animals: Dogs and Cats"
                  />
                </Card>
                <Card
                  hoverable
                  style={{ width: 240, height: 300 }}
                  cover={
                    <img
                      alt="example"
                      src="https://media3.s-nbcnews.com/i/newscms/2018_15/1331283/dog-groomer-today-180411-main-art_a4e6a576c187a45d34e1f0b862eedee7.jpg"
                    />
                  }
                >
                  <Meta
                    title="Canine Image"
                    description="Mobile Services: Yes
    Animals: Dogs"
                  />
                </Card>
                <Card
                  hoverable
                  style={{ width: 240, height: 300 }}
                  cover={
                    <img
                      alt="example"
                      src="https://static.boredpanda.com/blog/wp-content/uploads/2020/05/dogs-haircut-before-after-groomer-shu-and-tree-fb20-png__700__700.jpg"
                    />
                  }
                >
                  <Meta
                    title="Happy Tails"
                    description="Mobile Services: Yes
    Animals: Dogs and Cats"
                  />
                </Card>
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
