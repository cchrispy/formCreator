import React, { Component } from 'react';
import '../styles/main.scss';

import Header from './Header.jsx';
import Form from './Form.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Form />
      </div>
    )
  }
}

export default App;