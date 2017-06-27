import React, { Component } from 'react';
import {Row, Col, Grid} from 'react-bootstrap';
import './Footer.css';

class FooterComponent extends Component {
    render() {
        return(
            <Grid className="footer-container">
                <footer>
                    <Row>
                        <Col md={4} sm={12} className="footer-element">
                            <h3>Kingsland Farm</h3>
                            <p className="copyright-text">All rights reserved by Kingsland Farm.Copyright text can go here or a small blurb of the brand as well. Up to client!</p>
                        </Col>                        
                        <Col md={4} sm={12} className="footer-element">
                            <h4>Experiences</h4>
                            <p><a href="/events">Events</a></p>
                            <p><a href="/vacations">Vacations</a></p>
                        </Col>
                        <Col md={4} sm={12} className="footer-element">
                            <h4>Properties</h4>
                            <p><a href="/properties">SummerHaven</a></p>
                            <p><a href="/properties">Lake Joy House</a></p>
                            <p><a href="/properties">Cottage</a></p>
                            <p><a href="/properties">Stables</a></p>
                        </Col>
                    </Row>
                </footer>
            </Grid>
        );
    }
}

export default FooterComponent;