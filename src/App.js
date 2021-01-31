import React, { Component, Fragment } from 'react';
import FinalScreen from './components/FinalScreen/FinalScreen';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

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
          <Main
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
