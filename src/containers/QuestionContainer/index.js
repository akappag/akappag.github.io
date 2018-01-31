import React, { Component } from 'react';
import Video from '../../components/Video/index';
import Question from '../../components/Question/index';
import Answer from '../../components/Answer/index';
import questions from '../../json/static_dump';
import styles from './style.css';


class QuestionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: false,
      showNext: true,
      length: questions.length,
      input: '',
      correct: 0
    };
    this.handleChange = this.handleChange.bind(this);

  }

  getInitialState() {
    return {
      clicks: 0,
      show: false,
      showNext: true,
      length: questions.length,
      input: '',
      correct: 0
    };
  }

  componentWillMount() {
  }

  IncrementItem = () => {
    if(this.state.input === questions[this.state.clicks].answer){
      console.log("Correct");
      this.setState(
        {
          clicks: this.state.clicks + 1,
          correct: this.state.correct + 1,
          input: ''
        }
      );
    } else {
      console.log("Wrong");
      this.setState(
        {
          clicks: this.state.clicks + 1,
          input: ''
        }
      );
    }
  }
  ResetItem = () => {
    this.setState(
      {
        clicks: 0,
        input: '',
        correct: 0,
        show: false
      }
    );
  }

  Submit = () => {
    if(this.state.input === questions[this.state.clicks].answer){
      console.log("Correct");
      this.setState(
        {
          correct: this.state.correct + 1,
          show: true
        }
      );
    } else {
      console.log("Wrong");
      this.setState(
        {
          show: true
        }
      );
    }
  }

  showScore = () => {
    const score = this.state.correct / this.state.length * 100;
    if(this.state.show){
      return (
        <h1>Final Score: {score}%</h1>
      );
    }

  }
  showNext = () => {
    if(this.state.clicks < this.state.length - 1){
      return (<button onClick={this.IncrementItem}>Next</button>);
    } else {
      return (<button onClick={this.Submit}>Submit</button>);
    }
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  }

  render() {
    return (
      <div>
      <Video number={this.state.clicks} />
      <Question number={this.state.clicks}/>
      <h3>Answer:</h3>
      <input type="text" name="answer" onChange={ this.handleChange } value={this.state.input}/><br/>
          <div className="buttonContainer">
            <div className="buttonClass">
            {this.showNext()}
            </div>
            <div className="buttonClass">
            <button onClick={this.ResetItem}>Start Over</button>
            </div>
          </div>
          {this.showScore()}
      </div>
    )
  }
}

export default QuestionContainer;
