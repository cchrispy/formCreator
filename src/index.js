import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';

var refresh = () => {

  render(
    <App />,
    document.getElementById('app')
  )

}

refresh();