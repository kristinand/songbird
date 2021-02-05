import React from 'react';
import logo from '@assets/logo.png';
import classes from './Header.css';
import { birdTypes } from '../../data/birds';

const header = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.top}>
        <img className={classes.logo} src={logo} alt={logo} />
        <p className={classes.score}>Счёт иргы: {props.score || 0}</p>
      </div>
      <ul className={classes.birdTypesList}>
        {birdTypes.map((birdType, index) => (
          <li className={[classes.birdTypes, index === props.stage ? classes.active : ''].join(' ')} key={birdType.type}>
            {birdType.type.split(" ")[0]}
          </li>
        ))}
      </ul>
    </header>
  );
};

export default header;
