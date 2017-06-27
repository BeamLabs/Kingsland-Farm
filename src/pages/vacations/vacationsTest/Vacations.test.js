import React from 'react';
import ReactDOM from 'react-dom';
import Vacations from '../Vacations';

it('renders Vacations page without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Vacations />, div);
});
