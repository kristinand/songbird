import React from 'react';
import classes from './Answers.css';
import Card from '../../UI/Card/Card'

const answers = (props) => {
  const answers = ['Воробей', 'Синица', 'Дятел', 'Голубь', 'Галка', 'Ворона'];
  return (
    <Card style={{padding: 0, gridArea: 'answers'}}>
      <ul>
        {answers.map(answer => <li className={classes.answer} key={answer}><span className={classes.indicator}>♪</span>{answer}</li>)}
      </ul>
    </Card>
  );
};

export default answers;
