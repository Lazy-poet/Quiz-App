import React from 'react';
import classes from './Question.module.css'
const Question = (props) => {
  let question = null;
  if (props.quizData.type === 'flag') {
    question = <img src={props.quizData.value} alt="" />
  }
  else {
    question = props.quizData.value
  }
  return (
    <div className={classes.Question}>
      <h2>{question} {props.quizData.question}</h2>

    </div>
  );
};

export default Question;
