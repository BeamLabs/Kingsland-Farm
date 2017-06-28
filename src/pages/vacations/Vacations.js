import React, { Component } from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import AboutGallery from '../../pages/about/aboutComponents/AboutGallery';
import './Vacations.css';

class Vacations extends Component {
  render() {
    return (
      <Grid className="vacations-container">
        <Row>
            <Col>
                <h5>For reservations / availability, please visit <a href="http://vrbo.com/12345">http://vrbo.com/12345</a></h5>
            </Col>
        </Row>
        <Row>
            <Col md={12} sm={12} className="title-container">
                <h1 className="title-header">Vacations</h1>
            </Col>
        </Row>
        <Row>
            <Col md={12} sm={12} className="intro-image-container">
                <Image src="http://via.placeholder.com/1000x500" className="intro-image" alt="1000x500" responsive/>
            </Col>
        </Row>
        <Row>
            <Col md={12} sm={12} className="about-container">
                <p className="about-paragraph">
                    Effect if in up no depend seemed. Ecstatic elegance gay but disposed. We me rent been part what. An concluded sportsman offending so provision mr education. Bed uncommonly his discovered for estimating far. Equally he minutes my hastily. Up hung mr we give rest half. Painful so he an comfort is manners. 

                    On insensible possession oh particular attachment at excellence in. The books arose but miles happy she. It building contempt or interest children mistress of unlocked no. Offending she contained mrs led listening resembled. Delicate marianne absolute men dashwood landlord and offended. Suppose cottage between and way. Minuter him own clothes but observe country. Agreement far boy otherwise rapturous incommode favourite. 
                </p>
            </Col>
        </Row>
        <div className="reservations-container">
            <Row>
                <Col md={12} sm={12}>
                    <h2 className="reservation-title">Reservations</h2>
                </Col>
            </Row>
            <Row>
                <Col md={12} sm={12}>
                    <p className="reservations-text">For reservations, please visit <a href="http://vrbo.com/12345">http://vrbo.com/12345</a></p>
                </Col>
            </Row>
        </div>
        <Row>
            <Col md={12} sm={12}>
                <h2 className="gallery-title">Gallery</h2>
            </Col>
        </Row>
        <AboutGallery/>
      </Grid>
    );
  }
}

export default Vacations;
