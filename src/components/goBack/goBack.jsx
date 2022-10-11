import { styled } from '@linaria/react';
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const GoBack = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  if(pathname === '/') {
    return null;
  }

  return (
    <Content>
      <button onClick={() => navigate(-1)}>back</button>
    </Content>
  )
}

const Content = styled.div`
  position: fixed;
  left: 50px;
  top: 50px
`;