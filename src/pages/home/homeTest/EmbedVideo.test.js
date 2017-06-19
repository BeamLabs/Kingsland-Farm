import React from 'react';
import ReactDOM from 'react-dom';
import EmbedVideo from '../homeComponents/embedVideo';

it('renders embedVideo component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EmbedVideo />, div);
});