import React from 'react';
import classes from './Question.css';
import birdImage from '@assets/bird.png';
import Audio from './Audio/Audio';
import Card from '../../UI/Card/Card';

const question = (props) => {
  return (
    <Card style={{ gridArea: 'question', display: 'flex', gap: '1rem' }}>
      <div className={classes.imageContainer}>
        <img className={classes.image} src={birdImage} alt="Bird" />
      </div>
      <div className={classes.audioContainer}>
        <h3 className={classes.title}>{props.bird.name}</h3>
        <Audio audio={props.bird.audio} />
      </div>
    </Card>
  );
};

export default question;
