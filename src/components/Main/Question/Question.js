import React from 'react';
import classes from './Question.css';
import bird from '@assets/bird.png';
import Audio from './Audio/Audio'

const question = (props) => {

  return (
    <div className={classes.question}>
      <div className={classes.imageContainer}>
        <img className={classes.image} src={bird} alt="Bird" />
      </div>
      <div className={classes.audioContainer}>
        <h3 className={classes.title}>*******</h3>
        <Audio />
      </div>
    </div>
  );
};

export default question;
