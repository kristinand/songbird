import React from 'react';
import classes from './SelectedBird.css'

const selectedBird = (props) => {
  return (
    <div className={classes.selectedBird}>
      <h1>Selected bird</h1>
    </div>
  );
};

export default selectedBird;
