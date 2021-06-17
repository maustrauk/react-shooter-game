import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FlyingObjectBase from './FlyingObjectBase';
import FlyingObjectTop from './FlyingObjectTop';

import { flyingObjectsAnimation } from '../../utils/animations';

const Move = styled.g`
  ${props => flyingObjectsAnimation(props.endPosition)}
`;

const FlyingObject = props => (
  <Move endPosition={props.animationEnd}>
    <FlyingObjectBase position={props.position} />
    <FlyingObjectTop position={props.position} />
  </Move>
);

FlyingObject.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
  animationEnd: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
};

export default FlyingObject;