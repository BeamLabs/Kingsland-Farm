import React from 'react';
import ReactDOM from 'react-dom';
import Cottage from './Cottage';

it('renders cottage component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Cottage />, div);
});
