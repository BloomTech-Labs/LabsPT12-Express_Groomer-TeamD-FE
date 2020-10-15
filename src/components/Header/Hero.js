import React from 'react';
import HeroImage from '../../assets/HeroImage.jpg';
import './header-styles.scss';

const Hero = () => {
  return (
    <div>
      <img className="hero" src={HeroImage} alt="cute doggy" />
      <h1 className="hero-headline">
        Your Pets <br /> Look Good Here
      </h1>
    </div>
  );
};

export default Hero;
