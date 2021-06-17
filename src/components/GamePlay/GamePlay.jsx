import React from 'react';

import CurrentScore from './CurrentScore';
import Heart from './Heart';

const GamePlay = (props) => {

    return <g>
        <CurrentScore score={15} />
        <Heart position={{x: -300, y: 35}} />
    </g>
};


export default GamePlay;