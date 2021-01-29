import React from 'react';
import classes from './Answers.css';
import Card from '../../UI/Card/Card'

const answers = (props) => {

  const onSelectBirdHandler = (event) => {
    const selectedBirdName = event.target.textContent.replace('♪', '');
    if (selectedBirdName === props.correctAnswer) {
      event.target.firstElementChild.className = [classes.indicator, classes.correct].join(' ');
    } else {
      event.target.firstElementChild.className = [classes.indicator, classes.wrong].join(' ');
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
