import React from 'react';
import classes from './ImageContainer.css';
const imageContainer = (props) => {
  return (
    <div className={classes.imageContainer}>
      <img className={classes.image} src={props.birdImage} alt="Bird" />
    </div>
  );
};

export default imageContainer;
