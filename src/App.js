import './App.css';
import React, { Component } from 'react'
import Quiz from './container/Quiz'
//import axios from 'axios'
class App extends Component{
  state={
    start: false
  }
  render(){
   // const display= 
  return (
    <div className="App">
      
      <Quiz />
    </div>

  );
}
}

export default App;
