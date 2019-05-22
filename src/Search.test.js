import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search';

it('renders without crashing of Search', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Search />, div);
  ReactDOM.unmountComponentAtNode(div);
});
