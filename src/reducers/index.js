import { MOVE_OBJECTS, START_GAME, SHOOT, LEADERBOARD_LOADED, LOGGED_IN, } from '../actions';
import moveObjects from './moveObjects';
import startGame from './startGame';
import shoot from './shoot';

const initialGameState = {
  started: false,
  kills: 0,
  lives: 3,
  flyingObjects: [],
  lastObjectCreatedAt: new Date(),
  cannonBalls: [],
  destrEffect: 10000,
};

const initialState = {
  angle: 45,
  gameState: initialGameState,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LEADERBOARD_LOADED:
      return {
        ...state,
        players: action.players,
      };
      
    case LOGGED_IN:
      return {
        ...state,
        currentPlayer: action.player,
      };

    case MOVE_OBJECTS:
      return moveObjects(state, action);

    case START_GAME:
      return startGame(state, initialGameState);

    case SHOOT:
        return shoot(state, action);
      
    default:
      return state;
  }
}

export default reducer;