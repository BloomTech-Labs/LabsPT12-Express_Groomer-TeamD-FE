import React from 'react';
import './footer-styles.scss';
import logoRev from '../../assets/logoRev.png';

function Footer() {
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
        <a href="url">about</a>
        <a href="url">testimonials</a>
        <a href="url">login</a>
      </div>
      <div className="mobileFooter">
        <div className="mobileSection1">
          <i className="fab fa-facebook-square"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-youtube-square"></i>
        </div>
        <div className="mobileSection2">
          <a href="url">about</a> |<a href="url">testimonials</a> |
          <a href="url">login</a>
        </div>
        <div className="mobileSection3">
          <img className="logoRev" src={logoRev} alt="logoRev" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
