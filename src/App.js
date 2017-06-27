import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './common/header/Header';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Properties from './pages/properties/Properties';
import Vacations from './pages/vacations/Vacations';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/properties' component={Properties}/>
            <Route exact path='/vacations' component={Vacations}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
