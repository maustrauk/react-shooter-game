import { checkCollision, objectSpeeds } from '../utils/formulas';
import { flyingObjectMaxLifeTime, cannonBallsMaxLifeTime } from '../utils/constants';

const checkCollisions = (cannonBalls, flyingDiscs) => {
    const objectsDestroyed = [];

    flyingDiscs.forEach( flyingDisc => {
        const currentDiscLifeTime = (new Date()).getTime() - flyingDisc.createdAt;

        const realEndPos = {
          x: flyingDisc.position.x,
          y: 0
        }; 

        const discSpeed = objectSpeeds(flyingDisc.position, realEndPos, flyingObjectMaxLifeTime); 

        const calculatedFlyingDiscPosition = {
          x: flyingDisc.position.x + discSpeed.x * currentDiscLifeTime,
          y: flyingDisc.position.y + discSpeed.y * currentDiscLifeTime,
          };

        const rectA = {
            x1: calculatedFlyingDiscPosition.x - 40,
            y1: calculatedFlyingDiscPosition.y - 10,
            x2: calculatedFlyingDiscPosition.x + 40,
            y2: calculatedFlyingDiscPosition.y + 10,
          };

          cannonBalls.forEach(cannonBall => {
            const currentBallLifeTime = (new Date()).getTime() - cannonBall.createdAt;
            const ballSpeed = objectSpeeds(cannonBall.position, cannonBall.animationEnd, cannonBallsMaxLifeTime);

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
                  flyingDiscId: flyingDisc.id,
                });
              }
          });
    })

    return objectsDestroyed;
};

export default checkCollisions;