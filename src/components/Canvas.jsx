import React from 'react';

import Background from './Background/Background';
import Cannon from './Cannon/Cannon';

const Canvas = () => {
    const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
    return (
      <svg
        id="react-shooter-canvas"
        preserveAspectRatio="xMaxYMax none"
        viewBox={viewBox}
      >
        <Background/>
        <Cannon/>
      </svg>
    );
  };

export default Canvas;