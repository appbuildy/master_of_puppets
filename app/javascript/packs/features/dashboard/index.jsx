import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
const { Content } = Layout;
import Header from './header';
import MyProjects from './my-projects';

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Header />
      <Content style={{ margin: '24px 72px' }}>
        <MyProjects />
      </Content>
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div``;

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Dashboard />,
    document.body.appendChild(document.createElement('div')),
  );
});
