import React from 'react';

import Title from './Title';
import StartGame from './StartGame';

const OnStart = (props) => {

    return <g>
        <Title/>
        <StartGame onClick={() => console.log('Go Home!')}/>
    </g>
};


export default OnStart;