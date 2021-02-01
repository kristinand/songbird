import React, { Component } from 'react';
import classes from './Main.css';
import Question from './Question/Question';
import Answers from './Answers/Answers';
import CustomButton from '../UI/CustomButton/CustomButton';
import SelectedAnswer from './SelectedAnswer/SelectedAnswer';
import { birdData } from '../../data/birds';

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

class Main extends Component {
  state = {
    correctAnswer: birdData[0][getRandomNumber(0, 6)],
    supposedAnswer: '',
    isAnswerGuessed: false
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.stage !== this.props.stage) {
      const updatedCorrectAnswer = birdData[this.props.stage][getRandomNumber(0, 6)];
      this.setState({
        correctAnswer: updatedCorrectAnswer,
        supposedAnswer: '',
        isAnswerGuessed: false
      })
      console.log('hidden bird: ', updatedCorrectAnswer.name);
    }
    console.log(this.state.supposedAnswer);
  }

  componentDidMount() {
    console.log('hidden bird: ', this.state.correctAnswer.name);
  }

  selectedAnswerHandler = (birdName) => {
    if (!this.state.isAnswerGuessed) this.setState({ isAnswerGuessed: birdName === this.state.correctAnswer.name });
    this.setState({ supposedAnswer: birdData[this.props.stage].find((bird) => bird.name === birdName) });
  };

  render() {
    const answers = birdData[this.props.stage].map((birds) => birds.name);
    return (
      <main className={classes.main}>
        <Question bird={this.state.correctAnswer} isAnswerGuessed={this.state.isAnswerGuessed} />
        <Answers
          answers={answers}
          isAnswerGuessed={this.state.isAnswerGuessed}
          correctAnswer={this.state.correctAnswer.name}
          getStageScore={this.props.getStageScore}
          getAnswer={this.selectedAnswerHandler}
        />
        <SelectedAnswer stage={this.props.stage} bird={this.state.supposedAnswer} />
        <CustomButton clicked={this.props.onNextStageHandler} disabled={!this.state.isAnswerGuessed}>
          Следующий вопрос
        </CustomButton>
      </main>
    );
  }
};

export default Main;
