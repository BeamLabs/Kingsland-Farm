import React from 'react';
import ReactDOM from 'react-dom';
import About from './About';

it('renders about component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<About />, div);
});
