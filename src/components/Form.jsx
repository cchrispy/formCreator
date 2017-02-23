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
          question: 'This is a quick and easy form builder! You can add, remove, and edit dialog.',
          description: '',
          editor: false,
          options: '',
          extra: ''
        },
        1: {
          question: 'The 12 Ball Problem',
          description: 'There are 12 balls. All the balls appear identical to each other, but one of them has a different weight. How many weighings with a balance scale is needed to figure out which ball is the counterfeit AND determine if it\'s heavier or lighter than the other 11 balls?',
          editor: false,
          options: '',
          extra: ''
        },
        2: {
          question: 'What is your favorite joke of all times?',
          description: 'Example: There\'s a band called 1023MB. They haven\'t had any gigs yet.',
          editor: false,
          options: '',
          extra: ''
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

  edit(question, description, i, options, extra) {
    /* Updates the dialog according to the user's edit */
    var newDialog = Object.assign({}, this.state.dialog)
    newDialog[i].question = question;
    newDialog[i].description = description;
    newDialog[i].editor = false;
    newDialog[i].options = options;
    newDialog[i].extra = extra;
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
    /* Re-order the dialog with respect to the other dialogs */
    var newDialog = reorder(this.state.dialog, i, up);
    if (newDialog) {
      this.setState({ dialog: newDialog })
    }
  }

  toggleEditor(i) {
    var show = !this.state.dialog[i].editor;
    var newDialog = Object.assign({}, this.state.dialog);
    for (var prop in newDialog) {
      newDialog[prop].editor = false;
    }
    newDialog[i].editor = show;
    this.setState({ dialog: newDialog })
  }

  hideEditor(i) {
    var newDialog = Object.assign({}, this.state.dialog);
    newDialog[i].editor = false;
    this.setState({ dialog: newDialog })
  }

  render() {
    return (
      <div id='form-sheet'>
        
        { this.state.count.map(i => (
          <Box question={ this.state.dialog[i].question.trim() || 'Edit me!' }
               description={ this.state.dialog[i].description }
               dialog={ this.state.dialog[i] }
               key={ i } position={ i } 
               edit={ this.edit.bind(this) } 
               delete={ this.delete.bind(this) }
               reorder={ this.reorder.bind(this) }
               toggleEditor={ this.toggleEditor.bind(this) }
               hideEditor={ this.hideEditor.bind(this) }
               stateEditor={ this.state.dialog[i].editor } />
        ))}

        <button className='btn btn-primary add' onClick={ this.addQuestion.bind(this) } >
          Add Question
        </button>
      </div>
    )
  }
}

export default Form;