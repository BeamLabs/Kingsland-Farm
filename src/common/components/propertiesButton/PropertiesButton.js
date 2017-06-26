import './PropertiesButton.css';
import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';

class PropertiesButton extends Component {
  render() {
    return (
      <Row>
          <Col lg={12} md={12} xs={12} sm={12} className="properties-button">
              <a href='/properties' className="properties-link">View Our Properties</a>
          </Col>
      </Row>
    );
  }
}

export default PropertiesButton;
