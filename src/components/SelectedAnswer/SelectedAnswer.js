import React, { Fragment } from 'react';
import classes from './SelectedAnswer.css';
import Card from '../UI/Card/Card';
import ImageContainer from '../UI/ImageContainer/ImageContainer';

const selectedAnswer = (props) => {
  let answer = <p>Прослушайте аудио и выберите ответ. Максимально возможный счёт за уровень — 5. С каждой попыткой счёт понижается на 1.</p>;

  if (props.bird) {
    answer = (
      <Fragment>
        <ImageContainer birdImage={props.bird.pic} />
        <h3>{props.bird.name}</h3>
      </Fragment>
    );
  }

  return <Card style={{ gridArea: 'answer' }}>{answer}</Card>;
};

export default selectedAnswer;