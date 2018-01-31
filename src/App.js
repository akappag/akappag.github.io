import React, { Component } from 'react';
import logo from './logo.svg';
import QuestionContainer from './containers/QuestionContainer/index'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <QuestionContainer />
      </div>
    );
  }
}

export default App;
