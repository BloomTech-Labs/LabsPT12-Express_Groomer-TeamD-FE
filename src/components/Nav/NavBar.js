import React, { useState } from 'react';
import './nav-styles.scss';
import Logo from '../../assets/logo.png';
import { Modal } from 'antd';
import { LoginPage } from '../pages/Login';

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(true);

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
        <a href="/search"> Search for Groomers</a>
        <a href="#about">About</a>
        <a href="#testimonial">Testimonial</a>
        <p onClick={showModal}>Login</p>
      </div>

      <Modal visible={visible} onOk={handleOk} onCancel={handleCancel}>
        <LoginPage />
      </Modal>

      {/* HAMBURGER MENUE */}

      <div className="menu-button" onClick={() => setOpen(!open)}>
        <i className="fas fa-bars"></i>
      </div>
      {/* Sidebar */}

      <nav className={`nav ${open ? 'hide' : 'show'}`}>
        <ul className="menu-items">
          <a href="#about" className="menu-link">
            About
          </a>
          <a href="#testimonial" className="menu-link">
            Testimonial
          </a>
          <p onClick={showModal} className="menu-link">
            Login
          </p>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
