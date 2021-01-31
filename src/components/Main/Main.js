import React, { useState, useEffect } from 'react';
import classes from './Main.css';
import Question from './Question/Question';
import Answers from './Answers/Answers';
import CustomButton from '../UI/CustomButton/CustomButton';
import SelectedAnswer from './SelectedAnswer/SelectedAnswer';
import { birdData } from '../../data/birds';

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const main = (props) => {
	const [correctAnswer, setCorrectAnswer] = useState(birdData[0][getRandomNumber(0,6)]);
	const [suppossedAnswer, setSuppossedAnswer] = useState('');
	const [isAnswerGuessed, setIsAnswerGuessed] = useState(false);

	const answers = birdData[props.stage].map(birds => birds.name);

	useEffect(() => {
		setCorrectAnswer(birdData[props.stage][getRandomNumber(0,6)]);
		setIsAnswerGuessed(false);
		setSuppossedAnswer('');
	}, [props.stage]);

	const selectedAnswerHandler = (birdName) => {
		if (!isAnswerGuessed) setIsAnswerGuessed(birdName === correctAnswer.name);
		setSuppossedAnswer(birdData[props.stage].find(bird => bird.name === birdName));
	}

  return (
    <main className={classes.main}>
      <Question bird={correctAnswer} isAnswerGuessed={isAnswerGuessed}/>
      <Answers answers={answers} isAnswerGuessed={isAnswerGuessed} correctAnswer={correctAnswer.name} getAnswer={selectedAnswerHandler}/>
      <SelectedAnswer stage={props.stage} bird={suppossedAnswer} />
      <CustomButton clicked={props.onNextStageHandler} disabled={!isAnswerGuessed}>Следующий вопрос</CustomButton>
    </main>
  );
};

export default main;
