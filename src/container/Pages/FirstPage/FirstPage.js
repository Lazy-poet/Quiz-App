import React from 'react';
import image from '../../../assets/undraw_adventure_4hum.svg';
import Button from '../../../components/UI/Button/Button'
import classes from './FirstPage.module.css'
const FirstPage = (props) => {
  return (
    <div className={classes.FirstPage}>
      <img src={image} alt="" />
      <h1>Welcome</h1>
      <p>Test your knowledge of the countries of the world by answering as much questions as you can correctly</p>
      <Button click={props.click}>Start Quiz</Button>
    </div>
  );
};

export default FirstPage;