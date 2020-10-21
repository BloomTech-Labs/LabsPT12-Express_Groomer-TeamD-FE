import React from 'react';
import { Nav } from '../../Nav';
import { Hero, SearchBar } from '../../Header';
import { About, Footer, Testimonials } from '../../Home-Sections';

function RenderLandingPage() {
  return (
    <div>
      <Nav />
      <Hero />
      <SearchBar />
      <About />
      <Testimonials />
      <Footer />
    </div>
  );
}
export default RenderLandingPage;
