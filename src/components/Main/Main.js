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
	const [selectedBirdName, setSelectedBirdName] = useState('');
	const [correctAnswer, setCorrectAnswer] = useState('');

	const stage = props.stage;
	const answers = birdData[stage].map(birds => birds.name);

	useEffect(() => {
		setCorrectAnswer(birdData[stage][getRandomNumber(0,6)]);
	}, [props.stage]);

	const selectedAnswerHandler = (birdName) => {
		setSelectedBirdName(birdName);
		console.log(selectedBirdName, correctAnswer);
	}

  return (
    <main className={classes.main}>
      <Question randomBird={correctAnswer} />
      <Answers answers={answers} correctAnswer={correctAnswer.name} getAnswer={selectedAnswerHandler}/>
      <SelectedAnswer />
      <CustomButton disabled={selectedBirdName !== correctAnswer.name}>Следующий вопрос</CustomButton>
    </main>
  );
};

export default main;
