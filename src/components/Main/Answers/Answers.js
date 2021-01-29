import React, { useState } from 'react';
import classes from './Answers.css';
import Card from '../../UI/Card/Card';
import wrongSound from '@assets/wrong.mp3';
import correctSound from '@assets/correct.mp3';

const answers = (props) => {
  const [ wrongAudio ] = useState(new Audio(wrongSound));
  const [ correctAudio ] = useState(new Audio(correctSound));

  const onSelectBirdHandler = (event) => {
    const selectedBirdName = event.target.textContent.replace('♪', '');
    if (selectedBirdName === props.correctAnswer && !props.isAnswerGuessed) {
      correctAudio.currentTime = 0;
      correctAudio.play();
      event.target.firstElementChild.className = [classes.indicator, classes.correct].join(' ');
    } else if (selectedBirdName !== props.correctAnswer && !props.isAnswerGuessed) {
      event.target.firstElementChild.className = [classes.indicator, classes.wrong].join(' ');
      wrongAudio.currentTime = 0;
      wrongAudio.play();
    }
    props.getAnswer(selectedBirdName);
  }

  return (
    <Card style={{padding: 0, gridArea: 'answers'}}>
      <ul>
        {props.answers.map(answer => (
          <li onClick={onSelectBirdHandler} className={classes.answer} key={answer}>
            <span className={classes.indicator}>♪</span>{answer} 
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default answers;
