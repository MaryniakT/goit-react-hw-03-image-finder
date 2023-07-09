import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

export const Spinner = styled.div`
  position: absolute;
  top: calc(50% - 42px);
  left: calc(50% - 42px);
  width: 84px;
  height: 84px;
  border-radius: 50%;
  perspective: 800px;
  z-index: 50;
`;

export const rotateOne = keyframes`
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
`;

export const rotateTwo = keyframes`
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }`;

export const rotateThree = keyframes`
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }`;

export const InnerOne = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  left: 0%;
  top: 0%;
  animation: ${rotateOne} 1s linear infinite;
  border-bottom: 4px solid ${p => p.theme.colors.violet};
`;

export const InnerTwo = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  right: 0%;
  top: 0%;
  animation: ${rotateTwo} 1s linear infinite;
  border-right: 4px solid ${p => p.theme.colors.lightBlue};
`;

export const InnerThree = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  right: 0%;
  bottom: 0%;
  animation: ${rotateThree} 1s linear infinite;
  border-top: 4px solid ${p => p.theme.colors.pink};
`;