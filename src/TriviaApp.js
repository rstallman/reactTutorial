import React from 'react';

export default class TriviaApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentQuestionIdx: 0,
      correctAnswer: 0,
      inCorrectAnswer: 0
    }
    this.buttonStyle = {
      width: 200,
      height: 50,
      padding:'6px 12px',
      paddingLeft: '80px',
      border:'2px solid #2e6da4',
      borderRadius:'4px',
      fontSize:'14px',
      margin: 10,
      backgroundColor:'lightGray',
      color:'blue',
      display: 'flex',
      flex: 1
    }
  }

  clickHandler(i) {
      console.log(i);
      let currentQuestionData = this.props.questionsData[this.state.currentQuestionIdx]
      let correctAnswer = this.state.correctAnswer;
      let inCorrectAnswer = this.state.inCorrectAnswer;

      if(i === currentQuestionData.correctIdx) {
        correctAnswer++;
      }
      else {
        inCorrectAnswer++;
      }
      
      this.setState({
        currentQuestionIdx: (this.state.currentQuestionIdx + 1) % this.props.questionsData.length,
        correctAnswer: correctAnswer,
        inCorrectAnswer:inCorrectAnswer
      })
  }

  render() {
    let currentQuestionData = this.props.questionsData[this.state.currentQuestionIdx];
    return (
      <div>
        <div>
          <h2 style={{color:'red'}}>{currentQuestionData.question}</h2>
          {currentQuestionData.choices.map((choice, index) => {
            return (<button  style={this.buttonStyle} onClick={()=> this.clickHandler(index)}>{choice}</button>)
          })}
        </div>
        <div>
          <h3>Correct: {this.state.correctAnswer}</h3>
          <h3>Incorrect: {this.state.inCorrectAnswer}</h3>
        </div>
      </div>
    )
  }

}