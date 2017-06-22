import React, { Component } from 'react';
import EmbedVideo from './homeComponents/embedVideo';
import AboutSection from './homeComponents/aboutSection';
import TestimonialSection from './homeComponents/testimonialSection';
import ContactSection from './homeComponents/contactSection';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="homepage">
          <EmbedVideo />
          <AboutSection />
          <TestimonialSection />
          <ContactSection />
      </div>
    );
  }
}

export default Home;