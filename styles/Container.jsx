import styled from 'styled-components';

const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 0 20px;
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
