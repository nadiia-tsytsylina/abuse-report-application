import { Stack, TableCell, TableRow, styled } from '@mui/material';

export const StyledStack = styled(Stack)`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledTableRow = styled(TableRow)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`;

export const StyledTableCell = styled(TableCell)`
  font-weight: 500;
  font-size: 16px;
  text-align: center;
`;

export const TableHeader = styled(StyledTableCell)`
  font-weight: 600;
`;
