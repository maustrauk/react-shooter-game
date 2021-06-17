import React from 'react';
import PropTypes from 'prop-types';

import Background from './Background/Background';
import Cannon from './Cannon/Cannon';
import GamePlay from './GamePlay/GamePlay';
import OnStart from './OnStart/OnStart';
import FlyingObjects from './FlyingObjects/FlyingObjects';

import { gameHeight } from '../utils/constants';

const Canvas = (props) => {
    const viewBox = [window.innerWidth / -2, 100 - gameHeight, window.innerWidth, gameHeight];
    return (
      <svg
        id="react-shooter-canvas"
        onMouseMove={props.trackMouse}
        viewBox={viewBox}
      >
        <defs>
          <filter id="shadow">
            <feDropShadow dx="1" dy="1" stdDeviation="2" />
          </filter>
        </defs>
        <Background/>
        <Cannon angle={props.angle}/>
        <GamePlay/>
        {!props.gameState.started && 
        <OnStart startGame={props.startGame}/>}
        <FlyingObjects/>
      </svg>
    );
  };

export default Canvas;

Canvas.propTypes = {
  angle: PropTypes.number.isRequired,
  trackMouse: PropTypes.func.isRequired,
  gameState: PropTypes.shape({
    started: PropTypes.bool.isRequired,
    kills: PropTypes.number.isRequired,
    lives: PropTypes.number.isRequired,
  }).isRequired,
  startGame: PropTypes.func.isRequired,
};