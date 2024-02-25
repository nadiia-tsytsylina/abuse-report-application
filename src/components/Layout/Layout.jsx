import { Outlet } from 'react-router-dom';
import { NavContainer, Container, StyledLink, MainNav } from './Layout.styled';

export default function Layout() {
  return (
    <>
      <NavContainer>
        <MainNav>
          <StyledLink to="/">Send Report</StyledLink>
          <StyledLink to="/reports">All Reports</StyledLink>
        </MainNav>
      </NavContainer>
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
