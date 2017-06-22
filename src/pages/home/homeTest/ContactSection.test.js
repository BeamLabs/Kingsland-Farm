import React from 'react';
import ReactDOM from 'react-dom';
import ContactSection from '../homeComponents/contactSection';

it('renders contactSection component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContactSection />, div);
});