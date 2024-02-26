import styled from '@emotion/styled';
import { Paper } from '@mui/material';
import { theme } from 'theme';

export const Text = styled('p')`
  font-size: 24px;
  font-weight: 500;
`;

export const StyledPaper = styled(Paper)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  padding: 24px;
  text-align: center;
  background-color: ${theme.palette.secondary.light};
`;
