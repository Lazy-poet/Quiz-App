import React, {useEffect} from 'react';
import Button from '../UI/Button/Button';
import classes from './Question.module.css'
const Question = (props) => {
  // const index = Math.floor(Math.random() * 200 + 1);
  
  // const country = props.data[index].capital
  // useEffect(()=>console.log(props.data), [])
  let question = null;
  if(props.quizData.type === 'flag'){
    question = <img src={props.quizData.value}/>
  }
  else{
    question = props.quizData.value
  }
  return (
    <div className={classes.Question}>
      <h2>{question} {props.quizData.question}</h2>
      
    </div>
  );
};

export default Question;