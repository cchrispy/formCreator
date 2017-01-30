import React, { Component } from 'react';
import Editor from './Editor.jsx';

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: this.props.question,
      editor: false
    }
  }

  toggleEdit() {
    this.setState({
      editor: true
    })
  }

  render() {
    return (
      <div className='box'>
        <div className='question'>{ this.props.question }</div>

        {
          !this.state.editor ? null : <Editor placeholder={ this.state.input } />
        }

        <div className='btn-group' role='group'>
          <button type='button'
                  className='btn btn-xs btn-default edit'
                  onClick={ this.toggleEdit.bind(this) } >Edit</button>

          <button type='button' className='btn btn-xs btn-danger delete'>
            <span className='glyphicon glyphicon-trash'></span>
          </button>
        </div>
        <hr/>
      </div>
    )
  }
}

export default Box;