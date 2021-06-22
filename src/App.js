import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getCanvasPosition } from './utils/formulas';

import Canvas from './components/Canvas';


class App extends Component  {

  constructor(props) {
    super(props);
    this.shoot = this.shoot.bind(this);
  }

  componentDidMount() {
    const self = this;

    setInterval(() => {
        self.props.moveObjects(self.canvasMousePosition);
    }, 10);

    window.onresize = () => {
      const cnv = document.getElementById('react-shooter-canvas');
      cnv.style.width = `${window.innerWidth}px`;
      cnv.style.height = `${window.innerHeight}px`;
    };
    window.onresize();
  }

  trackMouse(event) {
    this.canvasMousePosition = getCanvasPosition(event);
  }

  shoot() {
    this.props.shoot(this.canvasMousePosition);
  }

  render() {
    return (
      <Canvas
        angle={this.props.angle}
        currentPlayer={this.props.currentPlayer}
        players={this.props.players}
        trackMouse={event => (this.trackMouse(event))}
        gameState={this.props.gameState}
        startGame={this.props.startGame}
        shoot={this.shoot}
      />
    );
  }

}

App.propTypes = {
  angle: PropTypes.number.isRequired,
  moveObjects: PropTypes.func.isRequired,
  gameState: PropTypes.shape({
    started: PropTypes.bool.isRequired,
    kills: PropTypes.number.isRequired,
    lives: PropTypes.number.isRequired,
    flyingObjects: PropTypes.arrayOf(PropTypes.shape({
      position: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
      }).isRequired,
      animationEnd: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
      }).isRequired,
      createdAt: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    })).isRequired,
    cannonBalls: PropTypes.arrayOf(PropTypes.shape({
      position: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
      }).isRequired,
      animationEnd: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
      }).isRequired,
      createdAt: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    })).isRequired,
    destrEffect: PropTypes.number.isRequired,
  }).isRequired,
  startGame: PropTypes.func.isRequired,
  shoot: PropTypes.func.isRequired,
};

App.defaultProps = {
  cannonBalls: [],
};

export default App;
