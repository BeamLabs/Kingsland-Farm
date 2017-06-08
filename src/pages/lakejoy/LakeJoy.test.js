import React from 'react';
import ReactDOM from 'react-dom';
import LakeJoy from './LakeJoy';

it('renders LakeJoy component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LakeJoy />, div);
});
