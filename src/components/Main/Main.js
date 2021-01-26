import React from 'react';
import classes from './Main.css';
import Question from './Question/Question';
import Answers from './Answers/Answers';
import CustomButton from './CustomButton/CustomButton';
import SelectedBird from './SelectedBird/SelectedBird';

const main = (props) => {
	return (
		<main className={classes.main}>
			<Question />
			<Answers />
			<SelectedBird />
			<CustomButton disabled={true}>Следующий вопрос</CustomButton>
		</main>
	)
}

export default main;
