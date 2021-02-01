import React from 'react';
import classes from './Question.css';
import hiddenBirdImage from '@assets/bird.png';
import Audio from '../UI/Audio/Audio';
import Card from '../UI/Card/Card';
import ImageContainer from '../UI/ImageContainer/ImageContainer';

const question = (props) => {
  const birdName = props.isAnswerGuessed ? props.bird.name : '*****';
  const birdImage = props.isAnswerGuessed ? props.bird.pic : hiddenBirdImage;
  return (
    <Card style={{gridArea: 'question'}}>
      <div className={classes.question}>
        <div className={classes.imageContainer}>
          <ImageContainer birdImage={birdImage} />
        </div>
        <div className={classes.audioContainer}>
          <h3 className={classes.title}>{birdName}</h3>
          <Audio isAnswerGuessed={props.isAnswerGuessed} audio={props.bird.audio} />
        </div>
      </div>
    </Card>
  );
};

export default question;
