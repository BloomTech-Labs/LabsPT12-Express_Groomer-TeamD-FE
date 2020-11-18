import React from 'react';
import { Nav } from '../../Nav';
import { Hero } from '../../Header';
import { About, Footer, Testimonials } from '../../Home-Sections';

function RenderLandingPage() {
  return (
    <div>
      <Nav />
      <Hero />

      <About />
      <Testimonials />
      <Footer />
    </div>
  );
}
export default RenderLandingPage;
