import React, { Component } from 'react';
import Box from './Box.jsx';

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
        }
      },
      count: [0, 1]
    };
  }

  addQuestion() {
    console.log('Add question is not implemented');
    // this.setState({
    //   count: this.state.count.concat(this.state.count.length);
    // })
  }


  edit(question, description, i) {
    var newDialog = Object.assign({}, this.state.dialog, { [i]: { question, description } })
    this.setState({ dialog: newDialog })
  }

  delete(i) {
    console.log('deleted: ', i);
    var newDialog = Object.assign({}, this.state.dialog);
    delete newDialog[i];
    this.setState({
      dialog: newDialog,
      count: this.state.count.slice(0, this.state.count.length - 1)
    })
  }

  // editQuestion(str, i) {
  //   var questions = [...this.state.questions];
  //   questions[i] = str;
  //   this.setState({
  //     questions
  //   });
  // }
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