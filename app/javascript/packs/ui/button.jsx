import React from 'react';
import styled from 'styled-components';

const Button = ({ type, children, onClick }) => {
  if (type === 'border') {
    return <WrapperBorder onClick={onClick}>{children}</WrapperBorder>;
  }
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
};

export default Button;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: 36px;
  box-sizing: border-box;
  border-radius: 6px;
  background-image: linear-gradient(to bottom, #00b1ff, #0077f5);
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 0.85;
  }
`;

const WrapperBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #007aff;
  height: 36px;
  box-sizing: border-box;
  border-radius: 6px;
  border-style: solid;
  border-width: 2px;
  border-color: #007aff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 0.85;
  }
`;
