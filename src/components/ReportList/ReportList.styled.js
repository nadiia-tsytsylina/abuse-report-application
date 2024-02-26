import { Paper, Stack, TableCell, styled } from '@mui/material';
import { theme } from 'theme';

export const StyledPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 90%;
  padding: 24px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${theme.palette.secondary.light};
`;

export const StyledStack = styled(Stack)`
  margin-left: auto;
  margin-right: auto;
  padding: 24px 0;
`;

export const StyledTableCell = styled(TableCell)`
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  border-bottom: 1px solid ${theme.palette.primary.light};
`;

export const TableHeader = styled(StyledTableCell)`
  font-weight: 600;
  color: ${theme.palette.primary.dark};
`;
