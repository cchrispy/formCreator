import React, { Component } from 'react';
import Box from './Box.jsx';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        "Example question 1",
        "Sample question #2"
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
          <Box question={ question } key={ i } />
        ))}

        <button className='btn btn-primary add' onClick={ this.addQuestion.bind(this) } >
          Add Question
        </button>
      </div>
    )
  }
}

export default Form;