import React, { Component } from 'react';
import './Header.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {isExpOpen: false, isPropOpen: false}

    this.handleExpClose = this.handleExpClose.bind(this)
    this.handleExpOpen = this.handleExpOpen.bind(this)

    this.handlePropClose = this.handlePropClose.bind(this)
    this.handlePropOpen = this.handlePropOpen.bind(this)
  }

  //Handlers for hovering on dropdown to open immediately instead on onClick
  handleExpOpen() {
    this.setState({isExpOpen: true})
  }
  handleExpClose() {
    this.setState({isExpOpen: false})
  }

  handlePropOpen() {
    this.setState({isPropOpen: true})
  }
  handlePropClose() {
    this.setState({isPropOpen: false})
  }

  render() {
    return (
      <Navbar inverse collapseOnSelect className="topnav">
        <Navbar.Header>
          <Navbar.Brand>
            <p>KingsLand Farm</p>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav className="nav-items">
            <LinkContainer to="/">
              <NavItem eventKey={1}>Home</NavItem>
            </LinkContainer>
            <LinkContainer to="/about">
              <NavItem eventKey={2}>About</NavItem>
            </LinkContainer>

            <NavDropdown eventKey={3} title="Experiences" id="experience-navdropdown" onMouseEnter={this.handleExpOpen} onMouseLeave={this.handleExpClose} open={this.state.isExpOpen} onToggle={this.handleExpOpen}>
              <LinkContainer to="/events">
                <MenuItem eventKey={3.1}>Events</MenuItem>
              </LinkContainer>
              <LinkContainer to="/vacations">
                <MenuItem eventKey={3.2}>Vacations</MenuItem>
              </LinkContainer>
            </NavDropdown>

            <NavDropdown eventKey={4} title="Properties" id="property-navdropdown"  onMouseEnter={this.handlePropOpen} onMouseLeave={this.handlePropClose} open={this.state.isPropOpen} onToggle={this.handlePropOpen}>
              <LinkContainer to="/properties">
                <MenuItem eventKey={4.1}>SummerHaven</MenuItem>
              </LinkContainer>
              <LinkContainer to="/properties">
                <MenuItem eventKey={4.2}>Lake Joy House</MenuItem>
              </LinkContainer>
              <LinkContainer to="/properties">
                <MenuItem eventKey={4.3}>Cottage</MenuItem>
              </LinkContainer>
              <LinkContainer to="/properties">
                <MenuItem eventKey={4.1}>Stables</MenuItem>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;