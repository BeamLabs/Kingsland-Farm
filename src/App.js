import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Header from './common/header/Header';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Cottage from './pages/cottage/Cottage';
import LakeJoy from './pages/lakejoy/LakeJoy';
import Stables from './pages/stables/Stables';
import SummerHaven from './pages/summerhaven/SummerHaven';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header/>
            <Route path='/home' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/cottage' component={Cottage}/>
            <Route path='/lakejoy' component={LakeJoy}/>
            <Route path='/stables' component={Stables}/>
            <Route path='/summerhaven' component={SummerHaven}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
