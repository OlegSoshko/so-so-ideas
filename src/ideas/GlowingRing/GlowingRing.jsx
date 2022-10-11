import { styled } from '@linaria/react';
import React from 'react';

import { Spiner } from './Spiner';


export const GlowingRing = () => {
  return (
    <Content>
      <Container>
        <Spiner />
        <Spiner />
        <Spiner isBlink={true} />
        <Spiner isBlink={true}/>
      </Container>
    </Content>
  )
}

const Content = styled.div`
  min-height: 100vh;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  -webkit-box-reflect: below 0 linear-gradient(transparent, transparent, #0005);
`;