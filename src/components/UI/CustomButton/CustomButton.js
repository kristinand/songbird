import React from 'react';
import classes from './CustomButton.css'

const customButton = (props) => {
  return (
		<button className={classes.button} disabled={props.disabled || false} onClick={() => {}}>{props.children}</button>
  );
};

export default customButton;
