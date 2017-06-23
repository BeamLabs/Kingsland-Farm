import React from 'react';
import ReactDOM from 'react-dom';
import AboutGallery from '../aboutComponents/AboutGallery';

it('renders about page without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AboutGallery />, div);
});
