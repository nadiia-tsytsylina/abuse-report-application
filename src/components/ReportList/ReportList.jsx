import {
  Link,
  Pagination,
  Table,
  TableBody,
  TableHead,
  TableRow,
} from '@mui/material';
import { format } from 'date-fns';
import { useState } from 'react';

import {
  REPORT_TYPE_OPTIONS,
  DATE_FORMAT,
  PAGINATION_LIMIT,
} from 'constants/constants';

import {
  StyledPaper,
  StyledStack,
  StyledTableCell,
  TableHeader,
} from './ReportList.styled';

export default function ReportList({ reports }) {
  const [page, setPage] = useState(1);
  const startIndex = (page - 1) * PAGINATION_LIMIT;
  const endIndex = page * PAGINATION_LIMIT;
  const currentPageData = [...reports]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(startIndex, endIndex);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <StyledPaper>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Abused URL</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Report Type</TableHeader>
            <TableHeader>Date</TableHeader>
            <TableHeader>Spam Proof</TableHeader>
            <TableHeader>Target Country</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentPageData.map(report => (
            <TableRow key={report.id}>
              <StyledTableCell>
                <Link
                  href={report.abusedURL}
                  underline="hover"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {report.abusedURL.length > 50
                    ? report.abusedURL.substring(0, 50) + '...'
                    : report.abusedURL}
                </Link>
              </StyledTableCell>
              <StyledTableCell>{report.email}</StyledTableCell>
              <StyledTableCell>
                {
                  REPORT_TYPE_OPTIONS.find(
                    option => option.value === report.reportType
                  ).label
                }
              </StyledTableCell>
              <StyledTableCell>
                {format(report.createdAt, DATE_FORMAT)}
              </StyledTableCell>
              <StyledTableCell>
                {report.spamProof !== '' ? report.spamProof : '-'}
              </StyledTableCell>
              <StyledTableCell>
                {report.targetCountry !== '' ? report.targetCountry : '-'}
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <StyledStack direction="row" justifyContent="center" spacing={2}>
        <Pagination
          color="secondary"
          count={Math.ceil(reports.length / PAGINATION_LIMIT)}
          page={page}
          onChange={handlePageChange}
        />
      </StyledStack>
    </StyledPaper>
  );
}
