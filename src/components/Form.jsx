import React, { Component } from 'react';
import Box from './Box.jsx';

import order from '../helpers/order';

class Form extends Component { // Maintains all the questions and their order
  constructor(props) {
    super(props);
    this.state = {
      dialog: {
        0: {
          question: 'Example question: What are some activities you enjoy doing?',
          description: 'Sample description!!!!'
        },
        1: {
          question: 'Sample question: What is the meaning of life?',
          description: ''
        },
        2: {
          question: 'Hello everybody what would you like to do today?',
          description: 'I don\'t really know what you are talking about so yup'
        }
      },
      count: [0, 1, 2]
    };
  }

  addQuestion() {
    console.log('Add question is not implemented');
  }

  edit(question, description, i) {
    var newDialog = Object.assign({}, this.state.dialog, { [i]: { question, description } })
    this.setState({ dialog: newDialog })
  }

  delete(i) {
    this.setState({
      dialog: order(this.state.dialog, i, this.state.count.length),
      count: this.state.count.slice(0, this.state.count.length - 1)
    })
  }

  render() {
    return (
      <div id='form-sheet'>
        
        { this.state.count.map(i => (
          <Box question={ this.state.dialog[i].question }
               description={ this.state.dialog[i].description }
               key={ i } position={ i } 
               edit={ this.edit.bind(this) } 
               delete={ this.delete.bind(this) } />
        ))}

        <button className='btn btn-primary add' onClick={ this.addQuestion.bind(this) } >
          Add Question
        </button>
      </div>
    )
  }
}

export default Form;