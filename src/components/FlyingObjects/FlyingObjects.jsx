import React from 'react';
import PropTypes from 'prop-types';

import FlyingObject from './FlyingObject';


const FlyingObjects = (props) => {

    return <g>
        {props.flyingObjects.map(flyingObject => (
            <FlyingObject key={flyingObject.id} position={flyingObject.position} animationEnd={flyingObject.animationEnd}/>
        ))}
    </g>
};

FlyingObjects.propTypes = {
    flyingObjects: PropTypes.arrayOf(PropTypes.shape({
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

export default FlyingObjects;