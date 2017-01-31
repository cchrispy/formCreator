import React, { Component } from 'react';
import Box from './Box.jsx';
import { order, reorder } from '../helpers/order';

/* Maintains all the questions and their order */
class Form extends Component {
  constructor(props) {
    super(props);
    /* Track the dialogs in the state, as well as their orders */
    this.state = {
      dialog: {
        0: {
          question: 'Yo',
          description: 'Sample description!!!!'
        },
        1: {
          question: 'The 12 Ball Problem',
          description: 'There are 12 balls. All the balls appear identical to each other, but one of them has a different weight. How many weighings with a balance scale is needed to figure out which ball is the counterfeit AND determine if it\'s heavier or lighter than the other 11 balls?'
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
    var len = this.state.count.length;
    var newDialog = Object.assign({}, this.state.dialog, {
      [len]: {
        question: 'Edit me!',
        description: ''
      }
    })
    this.setState({
      dialog: newDialog,
      count: this.state.count.concat(len)
    })
  }

  edit(question, description, i) {
    /* Updates the dialog according to the user's edit */
    var newDialog = Object.assign({}, this.state.dialog, { [i]: { question, description } })
    this.setState({ dialog: newDialog })
  }

  delete(i) {
    /* Delete the dialog and adjust/shift the other dialogs appropriately */
    this.setState({
      dialog: order(this.state.dialog, i, this.state.count.length),
      count: this.state.count.slice(0, this.state.count.length - 1)
    })
  }

  reorder(i, up) {
    var newDialog = reorder(this.state.dialog, i, up);
    if (newDialog) {
      this.setState({ dialog: newDialog })
    }
  }

  render() {
    return (
      <div id='form-sheet'>
        
        { this.state.count.map(i => (
          <Box question={ this.state.dialog[i].question.trim() || 'Edit me!' }
               description={ this.state.dialog[i].description }
               key={ i } position={ i } 
               edit={ this.edit.bind(this) } 
               delete={ this.delete.bind(this) }
               reorder={ this.reorder.bind(this) } />
        ))}

        <button className='btn btn-primary add' onClick={ this.addQuestion.bind(this) } >
          Add Question
        </button>
      </div>
    )
  }
}

export default Form;