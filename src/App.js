import React, { Component, Fragment } from 'react';
import FinalScreen from './components/FinalScreen/FinalScreen';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Main />
        {/* <FinalScreen score={30} /> */}
      </Fragment>
    );
  }
}

export default App;
