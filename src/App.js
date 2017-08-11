import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './common/header/Header';
import FooterComponent from './common/footer/FooterComponent';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Properties from './pages/properties/Properties';
import Vacations from './pages/vacations/Vacations';
import Events from './pages/events/Events';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/vacations' component={Vacations}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/properties' component={Properties}/>
            <Route exact path='/events' component={Events}/>
            <FooterComponent/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
