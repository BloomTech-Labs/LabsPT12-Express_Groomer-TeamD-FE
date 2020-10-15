import React, { useState } from 'react';
import { Menu } from 'antd';
import './nav-styles.scss';
import Logo from '../../assets/logo.png';

const NavBar = () => {
  const [current, setCurrent] = useState('');

  const handleClick = e => {
    console.log('click ', e);
    setCurrent({ current: e.key });
  };

  return (
    <Menu onClick={handleClick} selectedKeys={current} mode="horizontal">
      <img className="logo" src={Logo} alt="groomer logo" />
      <Menu.Item key="about">About</Menu.Item>
      <Menu.Item key="testimonial">Testimonial</Menu.Item>

      <Menu.Item key="alipay">
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Login
        </a>
      </Menu.Item>
    </Menu>
  );
};

export default NavBar;
