import React, { useState } from 'react';
import classes from './Audio.css';
// import music from '@assets/test.mp3';

const audio = (props) => {
  const [audioRef] = useState(React.createRef());

  if (props.pauseAudio) {
    audioRef.current.pause();
  }

  return (
    <audio ref={audioRef} className={classes.audio} controls src={props.audio}>
      Your browser does not support the <code>audio</code> element.
    </audio>
  );
};

export default audio;
