import React from 'react';
import ReactDOM from 'react-dom';
import Events from '../Events';

it('renders events page without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Events />, div);
});
