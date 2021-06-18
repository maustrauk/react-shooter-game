import { calculateAngle, degreesToRadians} from '../utils/formulas';
import { gameHeight } from '../utils/constants';

function shoot(state, action) {
  if (!state.gameState.started) return state;

  const { cannonBalls } = state.gameState;

  if (cannonBalls.length === 2) return state;

  const { x, y } = action.mousePosition;

  const angle = calculateAngle(0, 0, x, y);

  const height = 100;

  const startPos = {
      x:  height * Math.sin(degreesToRadians(angle)),
      y: - height * Math.cos(degreesToRadians(angle)),
  }

  const endPos ={
    x:  gameHeight * Math.sin(degreesToRadians(angle)),
    y: - gameHeight * Math.cos(degreesToRadians(angle)),
  }

  const id = (new Date()).getTime();

  const cannonBall = {
    position: startPos,
    animationEnd: endPos,
    createdAt: id,
    id: id,
  };

  return {
    ...state,
    gameState: {
      ...state.gameState,
      cannonBalls: [...cannonBalls, cannonBall],
    }
  };
}

export default shoot;