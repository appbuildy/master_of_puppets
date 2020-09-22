import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';

const { Header: AntHeader } = Layout;
import logo from './logo.svg';

const Header = () => {
  return (
    <AntHeader style={{ background: '#fff' }}>
      <Container>
        <LogoContainer>
          <Logo src={logo} />
          <ItemList>
            <Item isActive>Apps</Item>
            <Item>Templates</Item>
            <Item>Billing</Item>
            <Item>Help</Item>
          </ItemList>
        </LogoContainer>
        <LoginInfo>sergey@appbuildy.com</LoginInfo>
      </Container>
    </AntHeader>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LoginInfo = styled.div``;

const Logo = styled.img`
  margin-right: 20px;
`;

const ItemList = styled.div`
  display: flex;
`;

const Item = styled.div`
  margin-right: 20px;
  cursor: pointer;
  color: ${p => (p.isActive ? '#007aff' : '#111')};
`;
