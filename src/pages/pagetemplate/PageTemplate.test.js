import React from 'react';
import ReactDOM from 'react-dom';
import PageTemplate from './PageTemplate';

it('renders PageTemplate component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PageTemplate />, div);
});
