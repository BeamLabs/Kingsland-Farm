import React, { Component } from 'react';
import './About.css';
import {Grid, Row, Col, Carousel} from 'react-bootstrap';
import AboutGallery from './aboutComponents/AboutGallery';

class About extends Component {
  render() {
    return (
      <div>
        <div className="about-hero-image">
          <img src="http://via.placeholder.com/1000x500" />
        </div>
        <div className="text-content">
          <h2>About</h2>
          <p>Old unsatiable our now but considered travelling impression.
          In excuse hardly summer in basket misery. By rent an part need.
          At wrong of of water those linen. Needed oppose seemed how all.
          Very mrs shed shew gave you. Oh shutters do removing reserved wandered an.
          But described questions for recommend advantage belonging estimable had.
          Pianoforte reasonable as so am inhabiting. Chatty design remark and his
          abroad figure but its.</p>
        </div>
        <div className="text-content">
          <h2>History</h2>
          <p>Him boisterous invitation dispatched had connection inhabiting
          projection. By mutual an mr danger garret edward an. Diverted as
          strictly exertion addition no disposal by stanhill. This call wife do
          so sigh no gate felt. You and abode spite order get. Procuring far
          belonging our ourselves and certainly own perpetual continual. It
          elsewhere of sometimes or my certainty. Lain no as five or at high.
          Everything travelling set how law literature.</p>
        </div>
        <div className="gallery-content">
          <h2>Gallery</h2>
          <AboutGallery />
        </div>
      </div>
    );
  }
}

export default About;
