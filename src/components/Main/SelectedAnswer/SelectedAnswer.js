import React from 'react';
import classes from './SelectedAnswer.css';
import Card from '../../UI/Card/Card'

const selectedAnswer = (props) => {
  let answer = <p>Прослушайте аудио и выберите ответ</p>;

  return (
    <Card style={{gridArea: 'answer'}}>
      {answer}
    </Card>
  );
};

export default selectedAnswer;
