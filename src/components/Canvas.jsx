import React from 'react';
import PropTypes from 'prop-types';

import Background from './Background/Background';
import Cannon from './Cannon/Cannon';

const Canvas = (props) => {
    const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
    return (
      <svg
        id="react-shooter-canvas"
        onMouseMove={props.trackMouse}
        viewBox={viewBox}
      >
        <Background/>
        <Cannon angle={props.angle}/>
      </svg>
    );
  };

export default Canvas;

Canvas.propTypes = {
  angle: PropTypes.number.isRequired,
  trackMouse: PropTypes.func.isRequired,
};