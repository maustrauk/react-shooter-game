import React from 'react';

import FlyingObject from './FlyingObject';


const FlyingObjects = (props) => {

    return <g>
        <FlyingObject position={{x: -150, y: -300}}/>
        <FlyingObject position={{x: 150, y: -300}}/>
    </g>
};


export default FlyingObjects;