import React from 'react';
import classes from './Audio.css';
import music from '@assets/test.mp3';

const audio = (props) => {
  return (
    <audio ref={audio} className={classes.audio} controls src={music}>
      Your browser does not support the <code>audio</code> element.
    </audio>
  );
};

export default audio;