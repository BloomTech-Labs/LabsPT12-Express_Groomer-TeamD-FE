import React, { useState } from 'react';
import './nav-styles.scss';
import Logo from '../../assets/logo.png';
import { Modal } from 'antd';
import { LoginPage } from '../pages/Login';

const NavBar = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = e => {
    console.log(e);
    setVisible(false);
  };

  const handleCancel = e => {
    console.log(e);
    setVisible({
      visible: false,
    });
  };

  return (
    <div className="nav-container">
      <img src={Logo} alt="groom-logo" className="logo" />
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#testimonial">Testimonial</a>
        <p onClick={showModal}>Login</p>
      </div>

      <Modal visible={visible} onOk={handleOk} onCancel={handleCancel}>
        <LoginPage />
      </Modal>
    </div>
  );
};

export default NavBar;
