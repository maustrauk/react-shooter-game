import React from 'react';
import PropTypes from 'prop-types';
import { signIn } from 'auth0-web';

import Title from './Title';
import StartGame from './StartGame';
import Leaderboard from './Leaderboard';

const OnStart = (props) => {

    return <g>
        <Title/>
        <StartGame onClick={() => props.startGame()}/>
        <Leaderboard currentPlayer={props.currentPlayer} authenticate={signIn} leaderboard={props.players}/>
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