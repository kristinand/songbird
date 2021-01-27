import React from 'react';
import Card from '../UI/Card/Card';
import CustomButton from '../UI/CustomButton/CustomButton';
import classes from './FinalScreen.css';

const finalScreen = (props) => {
  const totalScore = 30;

  return (
    <Card>
      <div className={classes.finalScreen}>
        <h1>Поздравляем!</h1>
        {props.score < totalScore ? (
          <div>
            <p className={classes.text}>
              Вы прошли викторину и набрали {props.score} очков из {totalScore}!
            </p>
            <CustomButton>Попробовать еще раз!</CustomButton>
          </div>
        ) : (
          <p className={classes.text}>Вы прошли викторину и набрали максимальное количество очков!</p>
        )}
      </div>
    </Card>
  );
};

export default finalScreen;
