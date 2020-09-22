import styled from 'styled-components';
import Container from '../../styles/Container';

const StyledHeader = styled.header`
  background-color: ${(props) =>
    props.isDark ? props.theme.colors.black : props.theme.colors.white};
  color: ${(props) =>
    props.isDark ? props.theme.colors.white : props.theme.colors.black};
  height: 60px;

  display: flex;
  align-items: center;
`;
const Logo = styled.h2`
  font-size: 1.7rem;
  display: inline-block;
  font-weight: 400;
`;

const Navbar = ({ isDark }) => {
  return (
    <StyledHeader isDark={isDark}>
      <Container>
        <Logo>LOGO</Logo>
      </Container>
    </StyledHeader>
  );
};

export default Navbar;
