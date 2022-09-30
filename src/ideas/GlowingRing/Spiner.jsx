import { styled } from '@linaria/react';
import React from 'react';

export const Spiner = ({isBlink}) => {
  return (
    <Loader>
      {
        isBlink ? <Blink /> : <BlackHole />
      }
    </Loader>
  )
}

const Loader = styled.div`
  position: absolute;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  animation: rotate 2s linear infinite;

  &:nth-child(2),
  &:nth-child(4) {
    animation-delay: -1s;
    filter: hue-rotate(290deg);
  }

  &:nth-child(1)::before,
  &:nth-child(2)::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(to top, transparent, rgba(0,255,249,.4));
    background-size: 100px 180px;
    background-repeat: no-repeat;
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;
  }

  @keyframes rotate {
    0%
    {
      transform: rotate(0deg);
    }
    100%
    {
      transform: rotate(360deg);
    }
  }
`;

const Blink = styled.i`
  position: absolute;
  top: 0;
  left: 50%;
  width: 20px;
  height: 20px;
  background: #00fff9;
  transform: translate(-50%);
  z-index: 100;
  border-radius: 50%;
  box-shadow: 
    0 0 10px #00fff9,
    0 0 20px #00fff9,
    0 0 20px #00fff9,
    0 0 30px #00fff9,
    0 0 40px #00fff9,
    0 0 50px #00fff9,
    0 0 60px #00fff9,
    0 0 70px #00fff9,
    0 0 80px #00fff9,
    0 0 90px #00fff9,
    0 0 100px #00fff9;
`;

const BlackHole = styled.span`
  position: absolute;
  inset: 20px;
  background: #000;
  border-radius: 50%;
  z-index: 1;
`;