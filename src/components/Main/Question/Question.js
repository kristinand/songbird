import React from 'react';
import classes from './Question.css';
import bird from '@assets/bird.png';
import Audio from './Audio/Audio';
import Card from '../../UI/Card/Card';

const question = (props) => {

  return (
    <Card style={{gridArea: 'question', display: 'flex', gap:'1rem'}}>
      <div className={classes.imageContainer}>
        <img className={classes.image} src={bird} alt="Bird" />
      </div>
      <div className={classes.audioContainer}>
        <h3 className={classes.title}>*******</h3>
        <Audio />
      </div>
    </Card>
  );
};

export default question;
