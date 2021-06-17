import React from 'react';
import PropTypes from 'prop-types';

import CannonBall from './CannonBall';


const CannonBalls = (props) => {

    return <g>
        {props.cannonBalls.map(cannonBall => (
            <CannonBall position={cannonBall.position} animationEnd={cannonBall.animationEnd}/>
        ))}
    </g>
};

CannonBalls.propTypes = {
    cannonBalls: PropTypes.arrayOf(PropTypes.shape({
        position: PropTypes.shape({
          x: PropTypes.number.isRequired,
          y: PropTypes.number.isRequired
        }).isRequired,
        animationEnd: PropTypes.shape({
          x: PropTypes.number.isRequired,
          y: PropTypes.number.isRequired
        }).isRequired,
        id: PropTypes.number.isRequired,
      })).isRequired,
  };

export default CannonBalls;