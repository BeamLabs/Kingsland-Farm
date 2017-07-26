import React, { Component } from 'react';
import {Grid, Row, Col, Accordion, Panel, Image} from 'react-bootstrap';
import PropertiesAccordion from './propertiesComponents/AccordionComponent';
import AboutGallery from '../../pages/about/aboutComponents/AboutGallery';
import './Properties.css';

class PropertiesPage extends Component {
  render() {
    return (
      <Grid className="propertiesPage-container">
        <Row>
            <Col xs={12} sm={12} md={12} lg={12} className="intro-title">
                <h1>Properties</h1>
            </Col>
        </Row>
        <Row>
            <Col md={12} lg={12} className="intro-section">
                <p className="intro-paragraph">
                    Kingsland Farm is home to many properties, all suited for different needs and experiences. Learn
                    more about each property below. Each can be rented separately or together for larger events.
                </p>
            </Col>
        </Row>
        <Row>
            <Col md={12} sm={12} className="secondary-title">
              <h2>Kingsland Farm Properties</h2>
            </Col>
        </Row>
        <Row>
          <PropertiesAccordion/>
        </Row>
        <Row>
            <Col md={12} sm={12} className="secondary-title">
              <h2>Other Properties</h2>
            </Col>
        </Row>
        <Row className="second-accordion">
          <Accordion>
             <Panel header="SummerHaven" eventKey={1} style={{textAlign: 'left'}}>
                <Image src="http://via.placeholder.com/200x200" alt="100x100" className="property-image"/>
                <p className="accordion-info">
                    Your beachside paradise awaits! Kingsland Farm’s sister property in St. Augustine Florida is the
                    perfect destination for a one-of-a-kind vacation. This 3 bedroom/3 bath home is yours to make your
                    own, and comes well stocked with necessities in order to make your visit worry-free. Enjoy a
                    comfortable stay in a modern and updated beach house with plenty of all-inclusive amenities, all
                    just a few steps from a private beach!
                </p>
                <br/>
                <p><span style={{fontWeight: 'bold'}}>For Reservations:</span>
                <br/>
                Please visit: <a href="http://vrbo.com/12345">http://vrbo.com/12345</a></p>
            </Panel>
          </Accordion>
        </Row>
        <AboutGallery/>
      </Grid>
    );
  }
}

export default PropertiesPage;
