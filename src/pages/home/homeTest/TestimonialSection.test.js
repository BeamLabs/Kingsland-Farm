import React from 'react';
import ReactDOM from 'react-dom';
import TestimonialSection from '../homeComponents/testimonialSection';

it('renders testimonialSection component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestimonialSection />, div);
});