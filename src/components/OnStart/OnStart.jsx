import React from 'react';
import PropTypes from 'prop-types';
import { signIn } from 'auth0-web';

import Title from './Title';
import StartGame from './StartGame';
import Leaderboard from './Leaderboard';

import { leaderboard } from '../../utils/mockData'; 

const OnStart = (props) => {

    return <g>
        <Title/>
        <StartGame onClick={() => props.startGame()}/>
        <Leaderboard currentPlayer={leaderboard[6]} authenticate={signIn} leaderboard={leaderboard}/>
    </g>
};


OnStart.propTypes = {
    startGame: PropTypes.func.isRequired,
  };

export default OnStart;