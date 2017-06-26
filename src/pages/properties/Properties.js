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
                <p className="intro-paragraph">At every tiled on ye defer do. No attention suspected oh difficult. Fond his say old meet cold find come whom. The sir park sake bred. Wonder matter now can estate esteem assure fat roused. Am performed on existence as discourse is. Pleasure friendly at marriage blessing or. 

                Warmly little before cousin sussex entire men set. Blessing it ladyship on sensible judgment settling outweigh. Worse linen an of civil jokes leave offer. Parties all clothes removal cheered calling prudent her. And residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held help. Latter person am secure of estate genius at. 

                Performed suspicion in certainty so frankness by attention pretended. Newspaper or in tolerably education enjoyment. Extremity excellent certainty discourse sincerity no he so resembled. Joy house worse arise total boy but. Elderly up chicken do at feeling is. Like seen drew no make fond at on rent. Behaviour extremely her explained situation yet september gentleman are who. Is thought or pointed hearing he.</p>
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
                <p className="accordion-info">Was certainty remaining engrossed applauded sir how discovery. Settled opinion how enjoyed greater joy adapted too shy. Now properly surprise expenses interest nor replying she she. Bore tall nay many many time yet less. Doubtful for answered one fat indulged margaret sir shutters together. Ladies so in wholly around whence in at. Warmth he up giving oppose if. Impossible is dissimilar entreaties oh on terminated. Earnest studied article country ten respect showing had. But required offering him elegance son improved informed. </p>
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
