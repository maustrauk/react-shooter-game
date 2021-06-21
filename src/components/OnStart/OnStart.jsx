import React from 'react';
import PropTypes from 'prop-types';

import Title from './Title';
import StartGame from './StartGame';

const OnStart = (props) => {

    return <g>
        <Title/>
        <StartGame onClick={() => props.startGame()}/>
    </g>
};


OnStart.propTypes = {
    startGame: PropTypes.func.isRequired,
    players: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        maxScore: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
      })),
      currentPlayer: PropTypes.shape({
        id: PropTypes.string.isRequired,
        maxScore: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
      }),
  };

OnStart.defaultProps = {
    currentPlayer: null,
    players: null,
  };

export default OnStart;