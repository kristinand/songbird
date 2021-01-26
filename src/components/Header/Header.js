import React from 'react';
import logo from '../../assets/logo.png';
import classes from './Header.css';

const header = (props) => {
  const birdTypes = ['Воробьиные', 'Певчие', 'Врановые', 'Хищные'];
  let score = 0;
  return (
    <header className={classes.header}>
      <div className={classes.top}>
				<img className={classes.logo} src={logo} alt={logo} width="200px"/>
				<p className={classes.score}>Score: {score}</p>
			</div>
      <ul className={classes.birdTypesList}>
        {birdTypes.map((birdType) => <li className={classes.birdTypes} key={birdType}>{birdType}</li>)}
      </ul>
    </header>
  );
};

export default header;
