import React, { Component, Fragment } from 'react';
import Header from './components/Header/Header';
import FinalScreen from './screens/FinalScreen/FinalScreen';
import GameScreen from './screens/GameScreen/GameScreen';

class App extends Component {
  state = {
    stage: 0,
    score: 0,
    maxScore: 30,
    isGameOver: false,
  };

  getNextStage = () => {
    this.setState((prevState) => {
      if (prevState.stage < 5) {
        return { stage: prevState.stage + 1 };
      } else {
        return { isGameOver: true };
      }
    });
  };

  stageScoreHandler = (stageScore) => {
    this.setState((prevState) => {
      return { score: prevState.score + stageScore };
    });
  };

  startNewGameHandler = () => {
    this.setState({
      stage: 0,
      score: 0,
      isGameOver: false,
    });
  };

  render() {
    return (
      <Fragment>
        <Header stage={this.state.stage} score={this.state.score} />
        {this.state.isGameOver ? (
          <FinalScreen startNewGame={this.startNewGameHandler} maxScore={this.state.maxScore} score={this.state.score} />
        ) : (
          <GameScreen
            getStageScore={this.stageScoreHandler}
            onNextStageHandler={this.getNextStage}
            stage={this.state.stage}
          />
        )}
      </Fragment>
    );
  }
}

export default App;
