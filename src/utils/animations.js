import { keyframes, css } from 'styled-components';


export const objectMove = (props) => {

    const move = keyframes`
     0% {
            transform: translate(0,0);
        }
     100% {
            transform: translate(${props.x}px, ${props.y}px);
        }
    `;

    return css`animation: ${move} 4s linear`;
};