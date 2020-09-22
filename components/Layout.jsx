import React from 'react';
import Navbar from './navbar/Navbar';
import Footer from './Footer';

import styled from 'styled-components';

const Layout = (props) => {
  return (
    <FlexWrapper>
      <Content>
        <Navbar isDark />
        {props.children}
      </Content>
      <Footer />
    </FlexWrapper>
  );
};

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const Content = styled.div`
  flex-grow: 1;
  margin-bottom: 3rem;
`;

export default Layout;
