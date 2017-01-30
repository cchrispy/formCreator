import React, { Component } from 'react';
import Box from './Box.jsx';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        Create form in here
        <Box />
        <Box />
      </div>
    )
  }
}

export default Form;