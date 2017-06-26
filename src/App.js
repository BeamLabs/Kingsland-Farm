import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, IndexRoute } from 'react-router-dom';
import Header from './common/header/Header';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Properties from './pages/properties/Properties';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header/>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/properties' component={Properties}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
