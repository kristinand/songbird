import React from 'react';
import classes from './Main.css';
import Question from './Question/Question';
import Answers from './Answers/Answers';
import CustomButton from '../UI/CustomButton/CustomButton';
import SelectedAnswer from './SelectedAnswer/SelectedAnswer';

const main = (props) => {
	return (
		<main className={classes.main}>
			<Question />
			<Answers />
			<SelectedAnswer />
			<CustomButton disabled={true}>Следующий вопрос</CustomButton>
		</main>
	)
}

export default main;
