import React, { Component } from 'react';
import EmbedVideo from './homeComponents/embedVideo';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="homepage">
          <EmbedVideo />
        </div>
    );
  }
}

export default Home;