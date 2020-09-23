import React from 'react';
import styled from 'styled-components';
import createAppIcon from './create-app-icon.svg';
import createAppPlaceholder from './create-app-placeholder.svg';

const Card = ({ onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <Preview>
        <PlaceholderIcon src={createAppPlaceholder} />
      </Preview>
      <Info>
        <InfoIcon src={createAppIcon} /> Create App
      </Info>
    </Wrapper>
  );
};

export default Card;

const PlaceholderIcon = styled.img``;

const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 10px;
`;

const Info = styled.div`
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background: #fff;
  height: 68px;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: start;
  padding-left: 16px;
`;

const Wrapper = styled.div`
  height: 280px;
  flex-basis: 270px;
  border-radius: 8px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 0 5px 16px 0 rgba(0, 0, 0, 0.2);
  }

  &:hover ${Info} {
    background: #daf7ff;
  }
`;

const Preview = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 212px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-image: linear-gradient(
    to bottom,
    rgba(97, 228, 255, 0.3),
    rgba(0, 160, 255, 0.35)
  );
`;
