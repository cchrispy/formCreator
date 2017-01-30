import React, { Component } from 'react';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      description: ''
    };
  }

  confirm(e) {
    e.preventDefault();
    console.log('confirmed');
  }

  discard(e) {
    e.preventDefault();
    console.log('discarded');
  }

  render() {
    return (
      <div className='editor'>
        <form onSubmit={ this.confirm.bind(this) } >
          <div className='form-group'>
            <label htmlFor='edit-question'>Question</label>
            <input className='form-control'
                   defaultValue={ this.props.placeholder }
                   id='edit-question' >
            </input>
            <label htmlFor='edit-description' >Description</label>
            <input className='form-control'
                   defaultValue={ this.state.description || 'Description' }
                   id='edit-description' >
            </input>
          </div>
          <div className='btn-group'>
            <button type='submit' 
                    className='btn btn-success btn-xs'>Confirm</button>
            <button type='button' 
                    className='btn btn-warning btn-xs'
                    onClick={ this.discard.bind(this) } >Discard</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Editor;