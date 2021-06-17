import React from 'react';
import Sky from './Sky';
import Ground from './Ground';

const Background = (props) => {
    return <g>
        <Sky/>
        {<Ground/>}
    </g>
};

export default Background;