import React, { Component } from 'react';

class Editor extends Component { // Allows a question to be editted
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      description: ''
    };
  }

  componentWillMount() {
    this.setState({
      question: this.props.defaultQ,
      description: this.props.defaultD
    })
  }

  confirm(e) {
    e.preventDefault();
    this.props.edit(this.state.question, this.state.description, this.props.position);
    this.props.hide();
  }

  editQuestion(e) {
    this.setState({ question: e.target.value });
  }

  editDescription(e) {
    this.setState({ description: e.target.value });
  }

  render() {
    return (
      <div className='editor'>
        <form onSubmit={ this.confirm.bind(this) } >
          <label>Edit dialog</label>
          <div className='form-group'>
            <div className='input-group'>
              <div className='input-group-addon'>Question</div>
              <input className='form-control'
                     defaultValue={ this.props.defaultQ }
                     placeholder='Edit me!'
                     id='edit-question'
                     onChange={ this.editQuestion.bind(this) } >
              </input>
            </div>
            <div className='input-group'>
              <div className='input-group-addon'>Description</div>
              <textarea className='form-control'
                     defaultValue={ this.props.defaultD }
                     placeholder='Enter a description'
                     id='edit-description'
                     onChange={ this.editDescription.bind(this) }
                     rows='2' >
              </textarea>
            </div>
          </div>
          <div className='btn-group'>
            <button type='submit' 
                    className='btn btn-success btn-xs'>Confirm</button>
            <button type='button' 
                    className='btn btn-warning btn-xs'
                    onClick={ this.props.hide } >Discard</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Editor;