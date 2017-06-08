import React from 'react';
import ReactDOM from 'react-dom';
import Stables from './Stables';

it('renders Stables component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Stables />, div);
});
