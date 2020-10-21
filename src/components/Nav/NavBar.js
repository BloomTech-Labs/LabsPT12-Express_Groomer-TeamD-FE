import React from 'react';
import { Link } from 'react-router-dom';
import './nav-styles.scss';
import Logo from '../../assets/logo.png';

const NavBar = () => {
  return (
    <div className="nav-container">
      <img src={Logo} alt="groom-logo" className="logo" />
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#testimonial">Testimonial</a>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default NavBar;
