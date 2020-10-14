import React from 'react';
import { Menu } from 'antd';
import './nav-styles.scss';

import {
  MailOutlined,
  AppstoreOutlined,
  //   SettingOutlined,
} from '@ant-design/icons';

// const { SubMenu } = Menu;

class NavBar extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[current]}
        mode="horizontal"
      >
        <Menu.Item key="mail">About</Menu.Item>
        <Menu.Item key="app">Testimonial</Menu.Item>

        <Menu.Item key="alipay">
          <a
            href="https://ant.design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Login
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}

// ReactDOM.render(<NavBar />, mountNode);

export default NavBar;
