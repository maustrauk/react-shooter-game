import React from 'react';
import PropTypes from 'prop-types';

import Title from './Title';
import StartGame from './StartGame';

import { leaderboard } from '../../utils/mockData'; 

const OnStart = (props) => {

    return <g>
        <Title/>
        <StartGame onClick={() => props.startGame()}/>
    </g>
};


OnStart.propTypes = {
    startGame: PropTypes.func.isRequired,
  };

export default OnStart;