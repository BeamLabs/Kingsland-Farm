import React, { Component } from 'react';
import {Row, Col, Grid} from 'react-bootstrap';
import './Footer.css';

class FooterComponent extends Component {
    render() {
        return(
            <Grid className="footer-container">
                <footer>
                    <Row>
                        {/*}
                        <Col md={2} sm={1} className="footer-element">
                            <img className="sage-hop" src="/images/sage-hop.png"/>
                        </Col>*/}
                        <Col md={2} sm={3} className="footer-element">
                            <h4>Experiences</h4>
                            <p><a href="/events">Events</a></p>
                            <p><a href="/vacations">Vacations</a></p>
                        </Col>
                        <Col md={2} sm={3} className="footer-element">
                            <h4>Property Information</h4>
                            <p><a href="/properties">Properties</a></p>
                        </Col>
                        <Col md={2} sm={3} className="footer-element">
                          <h4>Rental Information</h4>
                          <p><a href="/properties">Lake Joy House</a></p>
                          <p><a href="/properties">Summer Haven</a></p>
                        </Col>
                    </Row>
                </footer>
            </Grid>
        );
    }
}

export default FooterComponent;