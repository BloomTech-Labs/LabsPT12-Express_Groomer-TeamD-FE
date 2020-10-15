import React from 'react';
import HeroImage from '../../assets/HeroImage.jpg';
import './hero-styles.scss';

const Hero = () => {
  return (
    <div>
      <img className="hero" src={HeroImage} />;
    </div>
  );
};

export default Hero;
