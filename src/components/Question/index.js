import React, { Component } from 'react';
import PropTypes from 'prop-types';
import questions from '../../json/static_dump';
import styles from './style.css';

class Question extends Component {
  render() {
    return (
      <div className="question">
      <h3>Question {this.props.number + 1} of {questions.length} :</h3>
      {questions[this.props.number].question}
      </div>
    );
  }
}

Question.propTypes = {
  number: PropTypes.number
};

export default Question;
