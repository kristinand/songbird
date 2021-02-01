import React from 'react';
import classes from './Question.css';
import hiddenBirdImage from '@assets/bird.png';
import Audio from './Audio/Audio';
import Card from '../../UI/Card/Card';
import ImageContainer from '../../UI/ImageContainer/ImageContainer';

const question = (props) => {
  const birdName = props.isAnswerGuessed ? props.bird.name : '*****';
  const birdImage = props.isAnswerGuessed ? props.bird.pic : hiddenBirdImage;
  return (
    <Card style={{ gridArea: 'question', display: 'flex', gap: '1rem' }}>
      <ImageContainer birdImage={birdImage} />
      <div className={classes.audioContainer}>
        <h3 className={classes.title}>{birdName}</h3>
        <Audio isAnswerGuessed={props.isAnswerGuessed} audio={props.bird.audio} />
      </div>
    </Card>
  );
};

export default question;
