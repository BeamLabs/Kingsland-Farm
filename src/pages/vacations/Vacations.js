import React, { Component } from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import VacationsGallery from './VacationsGallery.js';
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
        
        <VacationsGallery/>

        <Row>
            <Col md={12} sm={12} className="about-container">
                <p className="about-paragraph">
                    Feeling more like a seaside escape? In that case, the Summer Haven is calling your name! A sister
                    property of Kingsland Farm, the Summer Haven is a hidden oasis of ocean view fun! Located just south
                    of St. Augustine, Florida, you’re sure to be enchanted by the paradise-like atmosphere as soon as you
                    arrive. Read more about the Summer Haven house here. (include link to that section of properties page when ready)
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
      </Grid>
    );
  }
}

export default Vacations;
