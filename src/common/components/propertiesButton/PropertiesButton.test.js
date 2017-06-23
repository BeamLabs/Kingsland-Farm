import React from 'react';
import ReactDOM from 'react-dom';
import PropertiesButton from './PropertiesButton';

it('renders properties button without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PropertiesButton />, div);
});

// TODO: add test for hovering over the properties button.
