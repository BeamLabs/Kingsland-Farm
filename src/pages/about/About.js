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
          <h2>About</h2>
          <Col md={12} sm={12} className="about-hero-image">
            <Image src="/images/cottage-photos/cottage13.jpg" responsive className="hero-image"/>
          </Col>
        </Row>
        <Row>
          <Col md={12} sm={12} xs={12} className="text-content">
            <h3>Where Kindred Spirits Fly</h3>
            <p className="paragraph-content">Welcome to Kingsland Farm, a picturesque farmland tucked in south Georgia.
            Upon your arrival you will be swept up by the scent of sweet wildflowers as the sun sparkles off the water of the property’s private lake.
            The Lake Joy House sits atop a hill overlooking the grounds, and makes for a perfect spot to entertain.
            This property has plenty of space and scenery to host an unforgettable wedding or family reunion.
            Around the corner there is an inviting outdoor fire pit area, as well as plenty of wrap-around porch space for happy hours.</p>

            <p className="paragraph-content">The Cottage lies a bit further down the main road, making it an ideal place for a bride to put on finishing touches.
              The farm also features plenty of recreational space, including horse stables, a skeet shooting range and lake activities.
              An ideal retreat or special event space with all-inclusive amenities will be sure to make for a memorable experience!
            </p>

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
