import React from 'react';
import classes from './SelectedAnswer.css';
import Audio from '../UI/Audio/Audio';
import Card from '../UI/Card/Card';
import ImageContainer from '../UI/ImageContainer/ImageContainer';
import { birdTypes } from '../../data/birds'

const selectedAnswer = (props) => {
  let answer = (
    <p>
      Прослушайте аудио и выберите ответ. Максимально возможный счёт за уровень — 5. С каждой попыткой счёт понижается
      на 1.
    </p>
  );

  const birdType = birdTypes.find(birdType => birdType.type === props.bird.type);
  if (props.bird) {
    answer = (
      <div className={classes.selectedAnswer}>
        <div className={classes.imageContainer}>
          <ImageContainer birdImage={props.bird.pic} />
        </div>
        <div className={classes.nameContainer}>
          <h3>{props.bird.name}</h3>
          <h4>{props.bird.sname}</h4>
          <Audio audio={props.bird.audio} />
        </div>
        <p className={classes.desc}>{birdType.description || ''}</p>
      </div>
    );
  }

  return <Card style={{ gridArea: 'answer' }}>{answer}</Card>;
};

export default selectedAnswer;
