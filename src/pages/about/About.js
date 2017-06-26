import React, { Component } from 'react';
import './About.css';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import AboutGallery from './aboutComponents/AboutGallery';
import PropertiesButton from '../../common/components/propertiesButton/PropertiesButton';

class About extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={12} sm={12} className="about-hero-image">
            <Image src="http://via.placeholder.com/1000x500" responsive className="hero-image"/>
          </Col>
        </Row>
        <Row>
          <Col md={12} sm={12} xs={12} className="text-content">
            <h2>About</h2>
            <p style={{fontSize: '18px'}}>Old unsatiable our now but considered travelling impression.
            In excuse hardly summer in basket misery. By rent an part need.
            At wrong of of water those linen. Needed oppose seemed how all.
            Very mrs shed shew gave you. Oh shutters do removing reserved wandered an.
            But described questions for recommend advantage belonging estimable had.
            Pianoforte reasonable as so am inhabiting. Chatty design remark and his
            abroad figure but its.</p>
          </Col>
        </Row>
        <Row>
        <Col md={12} sm={12} xs={12} className="text-content">
          <h2>History</h2>
          <p style={{fontSize: '18px'}}>Him boisterous invitation dispatched had connection inhabiting
          projection. By mutual an mr danger garret edward an. Diverted as
          strictly exertion addition no disposal by stanhill. This call wife do
          so sigh no gate felt. You and abode spite order get. Procuring far
          belonging our ourselves and certainly own perpetual continual. It
          elsewhere of sometimes or my certainty. Lain no as five or at high.
          Everything travelling set how law literature.</p>
        </Col>
        </Row>
        <Row>
          <Col md={12} sm={12} className="gallery-content">
            <h2>Gallery</h2>
          </Col>
        </Row>
        <AboutGallery/>
        <PropertiesButton />
      </Grid>
    );
  }
}

export default About;
