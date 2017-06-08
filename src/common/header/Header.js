import React, { Component } from 'react';
import './Header.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="topnav">
          <Link to={'/home'}>Home</Link>
          <Link to={'/about'}>About</Link>
          <Link to={'/cottage'}>Cottage</Link>
          <Link to={'/lakejoy'}>Lake Joy House</Link>
          <Link to={'/stables'}>Stables</Link>
          <Link to={'/summerhaven'}>Summer Haven</Link>
      </div>
    );
  }
}

export default Header;
