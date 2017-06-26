import React from 'react';
import ReactDOM from 'react-dom';
import Properties from '../Properties';

it('renders Properties page without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Properties />, div);
});