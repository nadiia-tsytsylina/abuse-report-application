import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { theme } from 'theme';

export const StyledLink = styled(NavLink)`
  color: ${theme.palette.primary.contrastText};
  padding: 20px 0;
  font-weight: 600;
  font-size: 24px;
  text-transform: uppercase;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: ${theme.palette.secondary.main};
  }

  :hover {
    transform: scale(1.1);
  }
`;

export const Container = styled.div`
  padding: 24px;
  margin-left: auto;
  margin-right: auto;
`;
