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
        <form>
          <div className='form-group'>
            <label htmlFor='edit-question'>Question</label>
            <input className='form-control'
                   defaultValue={ this.props.placeholder }
                   id='edit-question' >
            </input>
            <label htmlFor='edit-description' >Description</label>
            <input className='form-control'
                   defaultValue={ 'Description' }
                   id='edit-description' >
            </input>
          </div>
        </form>
      </div>
    )
  }
}

export default Editor;