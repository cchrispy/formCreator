import React, { Component } from 'react';
import Header from './Header.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }
}

export default App;