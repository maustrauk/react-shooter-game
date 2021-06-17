import React from 'react';
import PropTypes from 'prop-types';

import CannonPipe from './CannonPipe';
import CannonBase from './CannonBase';

const Cannon = (props) => {

    return <g>
        <CannonPipe rotation={props.angle}/>
        <CannonBase/>
    </g>
};

Cannon.propTypes = {
    angle: PropTypes.number.isRequired,
  };

export default Cannon;

