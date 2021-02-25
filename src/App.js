import './App.css';
import React, { Component } from 'react'
import Quiz from './container/Quiz'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Quiz />
        <p>created by Roro- devChallenges.io</p>
      </div>
    );
  }
}

export default App;
