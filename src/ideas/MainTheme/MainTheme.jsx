import React from 'react';
import { styled } from '@linaria/react';

import { logo512 } from '../../images';
import { Menu } from '../../components';


export const MainTheme = () => {
  return (
    <Content>
      <Menu />
      <Glow>
        <Card>
        <img src={logo512} alt="logo" />
        <Text>Так себе идеи...</Text> 
        </Card>
      </Glow>
    </Content>
  )
}


const Content = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #282c34;
  padding: 50px;
  border-radius: 10px;
`;

const Glow = styled.div`
  position: relative;
  z-index: 1;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(90deg, #00CAB1, #7B00FF);
    background-size: 200% 200%;
    transform: scale(0.95);
    filter: blur(2vw);
    z-index: -1;
    animation: animated_glow 5s ease infinite;

    @keyframes animated_glow {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  }
`;

const Text = styled.span`
  font-weight: 700;
  letter-spacing: 2px;
  animation: animated_text 5s ease infinite; 

  @keyframes animated_text {
    0% { color: #00CAB1; }
    50% { color: #7B00FF; }
    100% { color: #00CAB1; }
  }
`;