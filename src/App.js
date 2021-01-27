import React, { Component, Fragment } from 'react';
import FinalScreen from './components/FinalScreen/FinalScreen';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import axios from 'axios';
import {KEY} from './config';

class App extends Component {
  state = {
    birds: [],
    error: false,
    isGameOver: false,
  };

  componentDidMount() {
    axios
      .get('http://localhost:3000/birds?q=""')
      .then((res) => {
        console.log(res.data[0]);
        const birdsArray = res.data.map((bird) => {
          return {
            gen: bird.gen,
            cnt: bird.cnt,
            name: bird.en,
            file: bird.file,
            sp: bird.sp,
            fileName: bird['file-name']
          };
        });
        console.log(birdsArray);
        this.setState({birds: birdsArray})
      })
      // .then(() => {
      //   this.getImage(this.state.birds[0].name)
      // })
      .catch((error) => {
        console.log(error);
      });

  }

  getImage(query) {
    const options = {
      method: 'GET',
      url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI',
      params: {q: 'bird ' + query, pageNumber: '1', pageSize: '10', autoCorrect: 'true'},
      headers: {
        'x-rapidapi-key': KEY,
        'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Main />
        {this.state.isGameOver ? <FinalScreen score={30} /> : ''}
      </Fragment>
    );
  }
}

export default App;
