import React from 'react';
import { styled } from '@linaria/react';

import { logo512 } from '../../images';


export const MainTheme = () => {
  return (
    <Content>
      <img src={logo512} alt="logo" />
      <span>Так себе идеи...</span>
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