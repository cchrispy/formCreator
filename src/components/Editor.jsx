import React, { Component } from 'react';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  render() {
    return (
      <div className='editor'>
        <textarea className='form-control'
                  defaultValue={ this.props.placeholder } 
                  rows='2'
                  cols='50' >
        </textarea>
      </div>
    )
  }
}

export default Editor;