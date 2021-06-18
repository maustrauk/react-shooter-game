import React from 'react';
import PropTypes from 'prop-types';

import CurrentScore from './CurrentScore';
import Heart from './Heart';

const GamePlay = (props) => {

    const lives = [];

    for (let i = 0; i < props.lives; i++) {
        const heartPosition = {
            x: -180 - ( i * 70 ),
            y: 35
        }

        lives.push(heartPosition);
    }


    return <g>
        <CurrentScore score={15} />
        {lives.map((live, id) => (<Heart key={`Heart${id}`} position={live} />))}
    </g>
};

GamePlay.propTypes = {
    lives: PropTypes.number.isRequired,
  };

export default GamePlay;