import React from 'react';
import PropTypes from 'prop-types';

import CurrentScore from './CurrentScore';
import Heart from './Heart';
import CannonBall from '../CannonBalls/CannonBall';

const GamePlay = (props) => {

    const lives = [];

    for (let i = 0; i < props.lives; i++) {
        const heartPosition = {
            x: -180 - ( i * 70 ),
            y: 35
        }

        lives.push(heartPosition);
    }

    const balls = [];

    for (let i = 0; i < props.balls; i++) {
        const ballPosition = {
            x: 140 + ( i * 70 ),
            y: 45
        }

        balls.push(ballPosition);
    }


    return <g>
        <CurrentScore score={props.score} />
        {lives.map((live, id) => (<Heart key={`Heart${id}`} position={live} />))}
        {balls.map((ball, id) => (<CannonBall key={`Ball${id}`} position={ball} animationEnd={{x: 0, y: 0}}/>))}
    </g>
};

GamePlay.propTypes = {
    lives: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
    balls: PropTypes.number.isRequired,
  };

export default GamePlay;