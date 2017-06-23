import React, { Component } from 'react';
import {Col, Row, Grid, Image} from 'react-bootstrap';
import PropertiesButton from '../../../common/components/propertiesButton/PropertiesButton';

class AboutSection extends Component {
  render() {
    return (
        <Grid>
            <hr/>
            <Row className="aboutSection-container">
                <Col lg={4} md={4} sm={4} xs={12} className="images">
                    <h3 className="pic-title">Event Venue</h3>
                    <Image src="http://placehold.it/300/09f.png/fff" alt="Event Venues" className="event-venue-image square-img" responsive/>
                </Col>
                <Col lg={4} md={4} sm={4} xs={12} className="images">
                    <h3 className="pic-title">Vacations</h3>
                    <Image src="http://placehold.it/300/09f.png/fff" alt="Event Venues" className="vacations-image square-img" responsive/>
                </Col>
                <Col lg={4} md={4} sm={4} xs={12} className="images">
                    <h3 className="pic-title">Stables</h3>
                    <Image src="http://placehold.it/300/09f.png/fff" alt="Event Venues" className="stables-image square-img" responsive/>
                </Col>
            </Row>
            <Row>
                <Col md={12} sm={12} xs={12} className="about-info">
                    <p>"Perhaps far exposed age effects. Now distrusts you her delivered applauded affection out sincerity. As tolerably recommend shameless unfeeling he objection consisted. She although cheerful perceive screened throwing met not eat distance. Viewing hastily or written dearest elderly up weather it as. So direction so sweetness or extremity at daughters. Provided put unpacked now but bringing."</p>
                </Col>
            </Row>
            <PropertiesButton />
            <hr/>
        </Grid>
    );
  }
}

export default AboutSection;
