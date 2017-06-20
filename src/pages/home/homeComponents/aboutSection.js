import React, { Component } from 'react';
import {Col, Row, Grid} from 'react-bootstrap';

class AboutSection extends Component {
  render() {
    return (
        <Grid>
            <Row className="aboutSection-container">
                <Col xs={6} md={4} className="images">
                    <img src="http://placehold.it/300/09f.png/fff" alt="Event Venues" className="event-venue-image square-img"/>
                </Col>
                <Col xs={6} md={4} className="images">
                    <img src="http://placehold.it/300/09f.png/fff" alt="Event Venues" className="vacations-image square-img"/>
                </Col>
                <Col xs={6} md={4} className="images">
                    <img src="http://placehold.it/300/09f.png/fff" alt="Event Venues" className="stables-image square-img"/>
                </Col>
            </Row>
            <Row>            
                <Col md={12} xs={6} className="about-info">
                    <p>"Perhaps far exposed age effects. Now distrusts you her delivered applauded affection out sincerity. As tolerably recommend shameless unfeeling he objection consisted. She although cheerful perceive screened throwing met not eat distance. Viewing hastily or written dearest elderly up weather it as. So direction so sweetness or extremity at daughters. Provided put unpacked now but bringing."</p>
                </Col>
            </Row>
            <Row>
                <Col md={12} xs={6} className="properties-button">
                    <a href='#' className="properties-link">View Our Properties</a>
                </Col>
            </Row>
        </Grid>
    );
  }
}

export default AboutSection;