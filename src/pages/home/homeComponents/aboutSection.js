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
                    <Image src="/images/stock-photos/events.png" alt="Event Venues" className="event-venue-image square-img" responsive/>
                </Col>
                <Col lg={4} md={4} sm={4} xs={12} className="images">
                    <Image src="/images/stock-photos/vacations.png" alt="Vacations" className="vacations-image square-img" responsive/>
                </Col>
                <Col lg={4} md={4} sm={4} xs={12} className="images">
                    <Image src="/images/stock-photos/stables.png" alt="Stables" className="stables-image square-img" responsive/>
                </Col>
            </Row>
            <Row>
                <Col md={12} sm={12} xs={12} className="about-info">
                    <p>"Welcome to Kingsland Farm, where kindred spirits intertwine. Our charming, multi-acre property tucked in south Georgia awaits you. Perfect for special events such as weddings, family reunions or romantic getaways, Kingsland Farm is the perfect place for any gathering."</p>
                </Col>
            </Row>
            <PropertiesButton />
            <hr/>
        </Grid>
    );
  }
}

export default AboutSection;
