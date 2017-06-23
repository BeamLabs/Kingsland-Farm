import React, { Component } from 'react';
import {Grid, Row, Col, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import FormComponent from '../../../common/components/FormComponent';

class ContactSection extends Component {
  render() {
    return (
        <Grid className="contactSection-container">
            <Row>
                <Col lg={12} md={12} sm={12} xs={12} className="contact-header">
                    <h2>Contact</h2>
                </Col>
            </Row>
            <Row>
                <Col lg={6} md={6} className="contact-info">
                    <p className="contact-name">Monica Kinnebrew</p>
                    <p>(402) 927-3152</p>
                    <p>tekbrew@cox.net</p>
                    <p>123 Main Street</p>
                    <p>Atlanta, GA 30306</p>
                </Col>
                <Col lg={6} md={6}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13263.785451178008!2d-84.42251844999998!3d33.78788324999999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdd6f1ae8b253bd43!2sStrongbox+West!5e0!3m2!1sen!2sus!4v1498145378872" width="400" height="300" frameBorder="0" style={{border:0}} allowFullScreen title="google-map-iframe" className="map-iframe">
                    </iframe>
                </Col>
            </Row>
            <h2 style={{marginTop: '50px'}}>Leave a Message</h2>
            <FormComponent />
        </Grid>
    );
  }
}

export default ContactSection;
