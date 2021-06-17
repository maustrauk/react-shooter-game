import React from 'react';

import Background from './Background/Background';

const Canvas = () => {
    const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
    return (
      <svg
        id="react-shooter-canvas"
        preserveAspectRatio="xMaxYMax none"
        viewBox={viewBox}
      >
        <Background/>
      </svg>
    );
  };

export default Canvas;