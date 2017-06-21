import React, { Component } from 'react';
import EmbedVideo from './homeComponents/embedVideo';
import AboutSection from './homeComponents/aboutSection';
import TestimonialSection from './homeComponents/testimonialSection';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="homepage">
          <EmbedVideo />
          <hr/>
          <AboutSection />
          <hr/>
          <TestimonialSection />
          <hr/>
        </div>
    );
  }
}

export default Home;