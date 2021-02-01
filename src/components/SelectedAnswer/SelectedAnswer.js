import React from 'react';
import classes from './SelectedAnswer.css';
import Audio from '../UI/Audio/Audio';
import Card from '../UI/Card/Card';
import ImageContainer from '../UI/ImageContainer/ImageContainer';

const selectedAnswer = (props) => {
  let answer = (
    <p>
      Прослушайте аудио и выберите ответ. Максимально возможный счёт за уровень — 5. С каждой попыткой счёт понижается
      на 1.
    </p>
  );

  if (props.bird) {
    answer = (
      <div className={classes.selectedAnswer}>
        <div className={classes.imageContainer}>
          <ImageContainer birdImage={props.bird.pic} />
        </div>
        <div className={classes.nameContainer}>
          <h3>{props.bird.name}</h3>
          <h4>{props.bird.sname}</h4>
        </div>
        <div className={classes.audioContainer}>
          <Audio audio={props.bird.audio} />
        </div>
        {/* <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Amet consectetur adipiscing elit duis tristique.
        </p> */}
      </div>
    );
  }

  return <Card style={{ gridArea: 'answer' }}>{answer}</Card>;
};

export default selectedAnswer;
