import React from 'react';
import Card from '../../components/UI/Card/Card';
import CustomButton from '../../components/UI/CustomButton/CustomButton';
import classes from './FinalScreen.css';

const finalScreen = (props) => {
  return (
    <Card>
      <div className={classes.finalScreen}>
        <h1>Поздравляем!</h1>
        {props.score < props.maxScore ? (
          <div>
            <p className={classes.text}>
              Вы прошли викторину и набрали <span className={classes.score}>{props.score}</span> очков из <span className={classes.score}>{props.maxScore}</span>!
            </p>
            <CustomButton  clicked={props.startNewGame}>Попробовать еще раз!</CustomButton>
          </div>
        ) : (
          <div>
            <p className={classes.text}>Вы прошли викторину и набрали максимальное количество очков!</p>
            <CustomButton  clicked={props.startNewGame}>Сыграть еще раз!</CustomButton>
          </div>
        )}
      </div>
    </Card>
  );
};

export default finalScreen;
