import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Man1 from '../../assets/man1.png';
import Man2 from '../../assets/man2.png';
import Woman1 from '../../assets/woman-1.png';
import Woman2 from '../../assets/woman-2.png';

import './testimonials-styles.scss';

export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img className="person" src={Woman1} alt="cute person" />
          <div className="myCarousel">
            <h3>Shirley Fultz</h3>
            <h4>Pet Owner</h4>
            <p>
              It's freeing to be able to catch up on news while waiting on my
              dog to be groomed.
            </p>
          </div>
        </div>

        <div>
          <img className="person" src={Man1} alt="cute person" />
          <div className="myCarousel">
            <h3>Daniel Keystone</h3>
            <h4>Groomer</h4>
            <p>
              I created a profile on Express Groomer and my business increased
              by 30%.
            </p>
          </div>
        </div>

        <div>
          <img className="person" src={Man2} alt="cute person" />
          <div className="myCarousel">
            <h3>Theo Sorel</h3>
            <h4>Pet Owner</h4>
            <p>
              I found the right groomer, and being able to book him was fairly
              easy.
            </p>
          </div>
        </div>
        <div>
          <img className="person" src={Woman2} alt="cute person" />
          <div className="myCarousel">
            <h3>Teresa Haye</h3>
            <h4>Groomer</h4>
            <p>
              Express Groomer has helped me stay organized, and it has also help
              me maintain consitent clients.
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}
