import React from 'react';
import classes from './Question.css';
import bird from '@assets/bird.png';

const question = (props) => {
  return (
    <div className={classes.question}>
      <div className={classes.imageContainer}>
        <img className={classes.image} src={bird} alt="Bird" />
      </div>
      <div className={classes.audioContainer}>
        <h3 className={classes.title}>*******</h3>
        <audio className={classes.audio} controls src="">
          Your browser does not support the <code>audio</code> element.
        </audio>
      </div>
    </div>
  );
};

export default question;
