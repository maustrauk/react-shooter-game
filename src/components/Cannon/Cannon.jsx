import React from 'react';

import CannonPipe from './CannonPipe';
import CannonBase from './CannonBase';

const Cannon = (props) => {

    return <g>
        <CannonPipe rotation={45}/>
        <CannonBase/>
    </g>
};

export default Cannon;