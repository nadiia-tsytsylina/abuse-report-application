import { Outlet } from 'react-router-dom';
import { Container, StyledLink } from './Layout.styled';
import { AppBar, Toolbar } from '@mui/material';

export default function Layout() {
  return (
    <>
      <nav>
        <AppBar position="static">
          <Toolbar sx={{ gap: '24px' }}>
            <StyledLink to="/">Send Report</StyledLink>
            <StyledLink to="/reports">All Reports</StyledLink>
          </Toolbar>
        </AppBar>
      </nav>
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
