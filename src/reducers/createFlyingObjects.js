import {
    createInterval, flyingObjectsStarterYAxis, maxFlyingObjects,
    flyingObjectsStarterPositions, gameHeight
  } from '../utils/constants';
  
  function createFlyingObjects(state)  {
    if ( ! state.gameState.started) return state; // game not running
  
    const now = (new Date()).getTime();
    const { lastObjectCreatedAt, flyingObjects } = state.gameState;
    const createNewObject = (
      now - (lastObjectCreatedAt).getTime() > createInterval &&
      flyingObjects.length < maxFlyingObjects
    );
  
    if ( ! createNewObject) return state; // no need to create objects now
  
    const predefinedPosition = Math.floor(Math.random() * maxFlyingObjects);
    const flyingObjectPosition = flyingObjectsStarterPositions[predefinedPosition];
    const newFlyingObject = {
      position: {
        x: flyingObjectPosition,
        y: flyingObjectsStarterYAxis,
      },
      animationEnd: {
        x: 0,
        y: gameHeight,
      },
      createdAt: now,
      id: now,
    };
  
    return {
      ...state,
      gameState: {
        ...state.gameState,
        flyingObjects: [
          ...state.gameState.flyingObjects,
          newFlyingObject
        ],
        lastObjectCreatedAt: new Date(),
      }
    }
  }

  export default createFlyingObjects;