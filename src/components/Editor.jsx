import React, { Component } from 'react';

class Editor extends Component { // Allows a question to be editted
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      description: '',
      options: 'Options',
      extra: ''
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
    this.props.edit(this.state.question, this.state.description, this.props.position, this.state.options, this.state.extra);
    this.props.hide(this.props.position);
  }

  editQuestion(e) {
    this.setState({ question: e.target.value });
  }

  editDescription(e) {
    this.setState({ description: e.target.value });
  }

  editExtra(e) {
    this.setState({
      extra: e.target.value
    })
  }

  changeOption(option) {
    this.setState({
      options: option
    })
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


              <div className='input-group-btn'>
                <button type='button' 
                        className='btn btn-default dropdown-toggle' 
                        data-toggle='dropdown' 
                        aria-haspopup='true' 
                        aria-expanded='false'>{ this.state.options } <span className='caret'></span>
                </button>
                <ul className='dropdown-menu'>
                          <li><a href='#' onClick={ () => this.changeOption('Example 1') } >Example 1</a></li>
                          <li><a href='#' onClick={ () => this.changeOption('Example 2') } >Example 2</a></li>
                          <li><a href='#' onClick={ () => this.changeOption('Example 3') } >Example 3</a></li>
                          <li role='separator' className='divider'></li>
                          <li><a href='#' onClick={ () => this.changeOption('Option A') } >Option A</a></li>
                          <li><a href='#' onClick={ () => this.changeOption('Option B') } >Option B</a></li>
                </ul>

              </div>

              <div className='input-group float-right'>
                <div className='input-group-addon'>Extra details</div>
                <input className='form-control'
                       id='extraDetails'
                       onChange={ this.editExtra.bind(this) } />
              </div>

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
                    onClick={ () => this.props.hide(this.props.position) } >Discard</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Editor;