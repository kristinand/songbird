import React, { Component, Fragment } from 'react';
import FinalScreen from './components/FinalScreen/FinalScreen';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

class App extends Component {
  state = {
    stage: 0,
    isGameOver: false
  }

  render() {
    return (
      <Fragment>
        <Header stage={this.state.stage} />
        <Main stage={this.state.stage}/>
        {this.state.isGameOver ? <FinalScreen score={30} /> : '' }
      </Fragment>
    );
  }
}

export default App;
