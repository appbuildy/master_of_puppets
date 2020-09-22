import React from 'react';
import styled from 'styled-components';

const MyProjects = () => {
  return (
    <Container>
      <Card>1</Card>
      <Card>1</Card>
      <Card>1</Card>
      <Card>1</Card>
    </Container>
  );
};

export default MyProjects;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  height: 212px;
  width: 270px;
  margin-right: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
`;
