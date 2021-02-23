import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button {...props} disabled = {props.disabled} onClick={props.click} className={[classes.Button, classes[props.btntype]].join(' ')}>
      {props.children}
    </button>
  );
};

export default Button;