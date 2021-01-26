import React from 'react';
import classes from './Main.css';
import Question from './Question/Question';
import Answers from './Answers/Answers';
import CustomButton from './CustomButton/CustomButton';
import BirdInfo from './BirdInfo/BirdInfo';

const main = (props) => {
	return (
		<main className={classes.main}>
			<Question />
			<Answers />
			<BirdInfo />
			<CustomButton disabled={true}>Следующий вопрос</CustomButton>
		</main>
	)
}

export default main;
