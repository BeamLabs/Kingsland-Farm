import React, { Component } from 'react';
import EmbedVideo from './homeComponents/embedVideo';
import AboutSection from './homeComponents/aboutSection';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="homepage">
          <EmbedVideo />
          <hr/>
          <AboutSection />
        </div>
    );
  }
}

export default Home;