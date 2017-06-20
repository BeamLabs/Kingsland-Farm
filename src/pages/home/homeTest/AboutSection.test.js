import React from 'react';
import ReactDOM from 'react-dom';
import AboutSection from '../homeComponents/aboutSection';

it('renders aboutSection component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AboutSection />, div);
});