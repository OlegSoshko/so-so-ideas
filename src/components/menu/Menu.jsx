import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const menu = [
  { label: 'SPINNER', link: 'spiner'},
]

export const Menu = () => {
  return (
    <Content>
      <MenuWrapper className={toRight}>
        {
          menu.map(({label, link}) => (
            <MenuItem key={link} label={label} link={link}/>
          ))
        }
      </MenuWrapper>
    </Content>
  )
}

const MenuItem = ({label, link}) => {
  const navigation = useNavigate();

  return (
    <Item onClick={() => navigation(link)}>{label}</Item>
  )
}

const Content = styled.menu`
  width: 100vw;
  position: fixed;
  top: 0;
  padding: 0;

  &::after,
  &::before {
    content: '';
    position: absolute;
    top: 0;
    height: 100%;
    width: 100px;
    z-index: 1;
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, #282c34, transparent);
  }
  &::before {
    left: 0;
    background: linear-gradient(to right, #282c34, transparent);
  }
`;


const MenuWrapper = styled.ul`
  padding: 0;
  display: flex;
  gap: 10px;
  justify-content: space-around;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

const toRight = css`
  animation-name: to-right;
  animation-delay: 100ms;

  /* @keyframes to-right {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(100%);
    }
  } */
`;

const toLeft = css`
  animation-name: to-left;

  /* @keyframes to-left {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(-100%);
    }
  } */
`;

const Item = styled.li`
  list-style-type: none;
  cursor: pointer;
  background: #ecdcc0;
  color: navy;
  font-size: 32px;
  font-weight: 700;
  line-height: 32px;
  padding: 15px;
  border-radius: 7px;
`;