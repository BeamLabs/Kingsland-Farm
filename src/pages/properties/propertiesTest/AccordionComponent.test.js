import React from 'react';
import ReactDOM from 'react-dom';
import PropertiesAccordion from '../propertiesComponents/AccordionComponent';

it('renders PropertiesAccordion component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PropertiesAccordion />, div);
});