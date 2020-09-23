import React from 'react';
import styled from 'styled-components';
import CreateProject from '../create-project';

const MyProjects = () => {
  return (
    <Container>
      <CreateProject />
    </Container>
  );
};

export default MyProjects;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
`;
