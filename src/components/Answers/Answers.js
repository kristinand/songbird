import React, { useState } from 'react';
import classes from './Answers.css';
import Card from '../UI/Card/Card';
import wrongSound from '@assets/wrong.mp3';
import correctSound from '@assets/correct.mp3';

const answers = (props) => {
  const [wrongAudio] = useState(new Audio(wrongSound));
  const [correctAudio] = useState(new Audio(correctSound));
  const [stageScore, setStageScore] = useState(5);
  const [pickedAnswers, setPickedAnswers] = useState([]);

  const onSelectBirdHandler = (event) => {
    const selectedBirdName = event.target.textContent.replace('♪', '');
    if (selectedBirdName === props.correctAnswer && !props.isAnswerGuessed) {
      event.target.firstElementChild.className = [classes.indicator, classes.correct].join(' ');
      correctAudio.currentTime = 0;
      correctAudio.play();
      props.getStageScore(stageScore);
      setStageScore(5);
    } else if (selectedBirdName !== props.correctAnswer && !props.isAnswerGuessed) {
      event.target.firstElementChild.className = [classes.indicator, classes.wrong].join(' ');
      wrongAudio.currentTime = 0;
      wrongAudio.play();
      if (!pickedAnswers.includes(selectedBirdName)) {
        setPickedAnswers((prevState) => [...prevState, selectedBirdName]);
        setStageScore((prevState) => prevState - 1);
      }
    }
    props.getAnswer(selectedBirdName);
  };

  return (
    <Card style={{ padding: 0, gridArea: 'answers', height: 'fit-content' }}>
      <ul>
        {props.answers.map((answer) => (
          <li onClick={onSelectBirdHandler} className={classes.answer} key={answer}>
            <span className={classes.indicator}>♪</span>
            {answer}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default answers;
