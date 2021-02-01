import React, { Component } from 'react';
import classes from './GameScreen.css';
import Answers from '../../components/Answers/Answers';
import CustomButton from '../../components/UI/CustomButton/CustomButton';
import SelectedAnswer from '../../components/SelectedAnswer/SelectedAnswer';
import { birdData } from '../../data/birds';
import Card from '../../components/UI/Card/Card';
import Audio from '../../components/UI/Audio/Audio';

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
        <Card style={{gridArea: 'question'}}>
          <Audio autoplay={true} pauseAudio={this.state.isAnswerGuessed} audio={this.state.correctAnswer.audio}/>
        </Card>
        <Answers
          answers={answers}
          isAnswerGuessed={this.state.isAnswerGuessed}
          correctAnswer={this.state.correctAnswer.name}
          getStageScore={this.props.getStageScore}
          getAnswer={this.selectedAnswerHandler}
        />
        <SelectedAnswer stage={this.props.stage} bird={this.state.supposedAnswer} />
        <CustomButton clicked={this.props.onNextStageHandler} disabled={!this.state.isAnswerGuessed}>
          {this.props.stage < 5 ? 'Следующий вопрос' : 'Завершить игру'}
        </CustomButton>
      </main>
    );
  }
};

export default Main;
