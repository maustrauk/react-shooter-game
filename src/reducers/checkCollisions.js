import { checkCollision } from '../utils/formulas';
import { gameHeight } from '../utils/constants';

const checkCollisions = (cannonBalls, flyingDiscs) => {
    const objectsDestroyed = [];

    flyingDiscs.forEach( flyingDisc => {
        const currentDiscLifeTime = (new Date()).getTime() - flyingDisc.createdAt;
        
        const calculatedFlyingDiscPosition = {
            x: flyingDisc.position.x,
            y: flyingDisc.position.y + ((currentDiscLifeTime / 4000) * gameHeight),
          };

        const rectA = {
            x1: calculatedFlyingDiscPosition.x - 40,
            y1: calculatedFlyingDiscPosition.y - 10,
            x2: calculatedFlyingDiscPosition.x + 40,
            y2: calculatedFlyingDiscPosition.y + 10,
          };

          cannonBalls.forEach(cannonBall => {
            const currentBallLifeTime = (new Date()).getTime() - cannonBall.createdAt;
            const ballSpeed = {
              x: ( cannonBall.animationEnd.x - cannonBall.position.x ) / 2,
              y: ( cannonBall.animationEnd.y - cannonBall.position.y ) / 2,
            };
            const calculatedcannonBallPosition = {
                x: cannonBall.position.x + ballSpeed.x * currentBallLifeTime,
                y: cannonBall.position.y + ballSpeed.y * currentBallLifeTime,
              };
    
            const rectB = {
                x1: calculatedcannonBallPosition.x - 8,
                y1: calculatedcannonBallPosition.y - 8,
                x2: calculatedcannonBallPosition.x + 8,
                y2: calculatedcannonBallPosition.y + 8,
              };

              if (checkCollision(rectA, rectB)) {
                objectsDestroyed.push({
                  cannonBallId: cannonBall.id,
                  flyingDiscID: flyingDisc.id,
                });
              };
          });
    })

    return objectsDestroyed;
};

export default checkCollisions;