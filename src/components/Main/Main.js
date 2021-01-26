import React from 'react';
import classes from './Main.css';
import Question from './Question/Question';
import Answers from './Answers/Answers';
import CustomButton from './CustomButton/CustomButton';
import BirdInfo from './BirdInfo/BirdInfo';

const main = (props) => {
	return (
		<div className={classes.Main}>
			<Question />
			<Answers />
			<BirdInfo />
			<CustomButton>Next Question</CustomButton>
		</div>
	)
}

export default main;
