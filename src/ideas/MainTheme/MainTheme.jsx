import React from 'react';
import { styled } from '@linaria/react';
import { useNavigate } from 'react-router-dom';

import { logo512 } from '../../images';
import { Menu } from '../../components';


export const MainTheme = () => {
  const navigate = useNavigate();
  return (
    <Content>
      <Menu />
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