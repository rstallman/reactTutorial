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
      border:'2px solid #2e6da4',
      borderRadius:'8px',
      fontSize:'14px',
      margin: 'auto',
      marginTop: 10,
      marginBottom: 10,
      backgroundColor:'lightGray',
      color:'blue',
      display:'block'
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
          <h2 style={{color:'red', textAlign:'center'}}>{currentQuestionData.question}</h2>
          {currentQuestionData.choices.map((choice, index) => {
            return (<button  style={this.buttonStyle} onClick={()=> this.clickHandler(index)}>{choice}</button>)
          })}
        </div>
        <div>
          <h3 style={{color:'green', textAlign:'center'}}>Correct: {this.state.correctAnswer}</h3>
          <h3 style={{color:'red', textAlign:'center'}}>Incorrect: {this.state.inCorrectAnswer}</h3>
        </div>
      </div>
    )
  }

}



let qData = [{question:'What is 8X1', choices:[7, 6, 8, 9], correctIdx:2}, 
            {question:'北京在哪个方位？', choices:['North', 'East', 'South'], correctIdx:0},
          {question:'who is Eisten?', choices:['German', 'Chines', 'American', 'France', 'English'], correctIdx:0},
          {question:'what is 99*9', choices:[200, 88, 891], correctIdx:2}];


// ReactDOM.render(
//   <TriviaApp questionsData={qData}/>,
//   document.getElementById('root')
// );
