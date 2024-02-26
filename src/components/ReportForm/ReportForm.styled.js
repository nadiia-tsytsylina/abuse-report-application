import styled from '@emotion/styled';
import { Paper } from '@mui/material';
import { theme } from 'theme';

export const StyledPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 500px;
  padding: 24px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${theme.palette.secondary.light};
`;

export const ErrorMessage = styled('p')`
  color: ${theme.palette.error.dark};
  font-size: 12px;
  font-weight: 500;
`;
