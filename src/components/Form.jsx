import React, { Component } from 'react';
import Box from './Box.jsx';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        "Example question: What are some activities you enjoy doing?",
        "Sample question: What is the meaning of life?"
      ]
    };
  }

  addQuestion() {
    this.setState({
      questions: this.state.questions.concat('New question')
    })
  }

  render() {
    return (
      <div id='form-sheet'>
        
        { this.state.questions.map((question, i) => (
          <Box question={ question } key={ i } position={ i } />
        ))}

        <button className='btn btn-primary add' onClick={ this.addQuestion.bind(this) } >
          Add Question
        </button>
      </div>
    )
  }
}

export default Form;