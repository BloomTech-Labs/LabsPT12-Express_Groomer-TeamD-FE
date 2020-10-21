import React, { useState } from 'react';
import './footer-styles.scss';
import logoRev from '../../assets/logoRev.png';
import { Modal } from 'antd';
import { LoginPage } from '../pages/Login';

function Footer() {
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
    <div className="footerContainer">
      <div className="footerSection1">
        <i className="fab fa-facebook-square"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-youtube-square"></i>
      </div>
      <div className="footerSection2">
        <img className="logoRev" src={logoRev} alt="logoRev" />
      </div>
      <div className="footerSection3">
        <a href="#about">About</a> |<a href="#testimonial">Testimonials</a> |
        <p onClick={showModal}>Login</p>
      </div>
      <div className="mobileFooter">
        <div className="mobileSection1">
          <i className="fab fa-facebook-square"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-youtube-square"></i>
        </div>
        <div className="mobileSection2">
          <a href="#about">About</a> |<a href="#testimonial">Testimonials</a> |
          <p onClick={showModal}>Login</p>
        </div>
        <div className="mobileSection3">
          <img className="logoRev" src={logoRev} alt="logoRev" />
        </div>
      </div>

      <Modal visible={visible} onOk={handleOk} onCancel={handleCancel}>
        <LoginPage />
      </Modal>
    </div>
  );
}

export default Footer;
