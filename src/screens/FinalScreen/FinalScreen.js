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
              Вы прошли викторину и набрали {props.score} очков из {props.maxScore}!
            </p>
            <CustomButton  clicked={props.startNewGame}>Попробовать еще раз!</CustomButton>
          </div>
        ) : (
          <p className={classes.text}>Вы прошли викторину и набрали максимальное количество очков!</p>
        )}
      </div>
    </Card>
  );
};

export default finalScreen;