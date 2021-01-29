import React from 'react';
import classes from './Question.css';
import hiddenBirdImage from '@assets/bird.png';
import Audio from './Audio/Audio';
import Card from '../../UI/Card/Card';

const question = (props) => {
  console.log('hidden bird: ', props.bird.name);
  const birdName = props.isAnswerGuessed ? props.bird.name : '*****';
  const birdImage = props.isAnswerGuessed ? props.bird.pic : hiddenBirdImage;
  return (
    <Card style={{ gridArea: 'question', display: 'flex', gap: '1rem' }}>
      <div className={classes.imageContainer}>
        <img className={classes.image} src={birdImage} alt="Bird"/>
      </div>
      <div className={classes.audioContainer}>
        <h3 className={classes.title}>{birdName}</h3>
        <Audio audio={props.bird.audio} />
      </div>
    </Card>
  );
};

export default question;
