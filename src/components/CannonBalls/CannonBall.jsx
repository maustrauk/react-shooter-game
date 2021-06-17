import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { objectMove } from '../../utils/animations';

const Move = styled.g`
  ${props => objectMove(props.endPosition)}
`;

const CannonBall = (props) => {
    const ballStyle = {
      fill: '#777',
      stroke: '#444',
      strokeWidth: '2px',
    };
    return (
      <Move endPosition={props.animationEnd}>
        <ellipse
          style={ballStyle}
          cx={props.position.x}
          cy={props.position.y}
          rx="16"
          ry="16"
        />
      </Move>
    );
  };
  
  CannonBall.propTypes = {
    position: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired
    }).isRequired,
    animationEnd: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired
    }).isRequired,
  };
  
  export default CannonBall;