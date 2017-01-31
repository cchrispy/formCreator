import React, { Component } from 'react';
import Editor from './Editor.jsx';

class Box extends Component { // Handles editting of a particular question
  constructor(props) {
    super(props);
    this.state = {
      editor: false
    }
  }

  toggleEditor() {
    this.setState({
      editor: !this.state.editor
    })
  }

  hideEditor() {
    this.setState({ editor: false });
  }

  render() {
    return (
      <div className='box'>
        <div onClick={ this.toggleEditor.bind(this) } >
          <div className='question hover'>{ this.props.question }</div>
          <div className='small description hover'>{ this.props.description || '' }</div>
        </div>

        {
          !this.state.editor ? null : 
            <Editor defaultQ={ this.props.question }
                    defaultD={ this.props.description }
                    hide={ this.hideEditor.bind(this) }
                    position={ this.props.position }
                    edit={ this.props.edit } />
        }

        <div className='btn-group' role='group'>
          <button type='button'
                  className='btn btn-xs btn-default edit'
                  onClick={ this.toggleEditor.bind(this) } >Edit</button>

          <button type='button' 
                  className='btn btn-xs btn-danger delete'
                  onClick={ () => this.props.delete(this.props.position) } >
            <span className='glyphicon glyphicon-trash'></span>
          </button>
        </div>
        <hr/>
      </div>
    )
  }
}

export default Box;