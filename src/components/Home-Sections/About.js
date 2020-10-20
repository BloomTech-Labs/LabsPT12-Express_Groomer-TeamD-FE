import React from 'react';
import './about-styles.scss';
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';

function About() {
  return (
    <div className="aboutContainer">
      <div className="aboutCard">
        <img className="icon" src={icon1} alt="icon1" />
        <h1>Search for a Groomer</h1>
        <p>Find your perfect groomer! Search by breed, service or location.</p>
      </div>
      <div className="aboutCard">
        <img className="icon" src={icon2} alt="icon2" />
        <h1>Mobile Grooming Options</h1>
        <p>
          Some groomers are mobile and by entering your zip code, have a groomer
          come to you.
        </p>
      </div>
      <div className="aboutCard">
        <img className="icon" src={icon3} alt="icon3" />
        <h1>Create a Groomer Account</h1>
        <p>
          Create a groomer business account that will be shown to clients in
          your area.{' '}
        </p>
      </div>
    </div>
  );
}

export default About;
