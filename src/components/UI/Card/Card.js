import React from 'react';
import classes from './Card.css';

const card = (props) => {
  return (
    <div style={props.style} className={classes.Card}>
      {props.children}
    </div>
  );
};

export default card;
