import React from 'react';
import classes from './LastPage.module.css'
import image from '../../../assets/undraw_winners_ao2o 2.svg';
import Button from '../../../components/UI/Button/Button'
const LastPage = (props) => {
  return (
    <div className={classes.LastPage}>
      <img src={image} alt="" />
      <h1>Results</h1>
      <p>You got <span>{props.correct}</span> correct {props.correct > 1 ? "answers" : "answer"}</p>
      <Button click={props.click}>Try again</Button>
    </div>
  );
};

export default LastPage;