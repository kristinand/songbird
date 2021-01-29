import React from 'react';
import classes from './CustomButton.css';

const customButton = (props) => {
  return (
    <button onClick={props.clicked} className={classes.button} disabled={props.disabled || false}>
      {props.children}
    </button>
  );
};

export default customButton;
