import React from 'react';
import ReactDOM from 'react-dom';
import SummerHaven from './SummerHaven';

it('renders SummerHaven component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SummerHaven />, div);
});
