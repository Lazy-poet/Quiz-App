import React from 'react';
import Button from '../../UI/Button/Button';
import classes from './Option.module.css'
const Option = (props) => {

  
  return (
    <div className={classes.Option}>
    <Button disabled={props.disabled} click={props.click} btntype ={props.btntype}>{props.children}</Button>
    </div>
  );
};

export default Option;