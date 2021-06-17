import React from 'react';
import { pathFromBezierCurve } from '../../utils/formulas';

const Title = () => {
  const textStyle = {
    fontFamily: '"Joti One", cursive',
    fontSize: 120,
    fill: '#cbca62',
  };

  const contextLineCurve = {
    initialAxis: {
      x: -190,
      y: -900,
    },
    initialControlPoint: {
      x: 95,
      y: -50,
    },
    endingControlPoint: {
      x: 285,
      y: -50,
    },
    endingAxis: {
      x: 380,
      y: 0,
    },
  };

  const shooterLineCurve = {
    ...contextLineCurve,
    initialAxis: {
      x: -250,
      y: -690,
    },
    initialControlPoint: {
      x: 125,
      y: -90,
    },
    endingControlPoint: {
      x: 375,
      y: -90,
    },
    endingAxis: {
      x: 500,
      y: 0,
    },
  };

  return (
    <g filter="url(#shadow)">
      <defs>
        <path
          id="ContextPath"
          d={pathFromBezierCurve(contextLineCurve)}
        />
        <path
          id="ShooterPath"
          d={pathFromBezierCurve(shooterLineCurve)}
        />
      </defs>
      <text {...textStyle}>
        <textPath xlinkHref="#ContextPath">
          Context
        </textPath>
      </text>
      <text {...textStyle}>
        <textPath xlinkHref="#ShooterPath">
          Shooter!
        </textPath>
      </text>
    </g>
  );
};

export default Title;