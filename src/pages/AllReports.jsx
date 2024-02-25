import { useSelector } from 'react-redux';

import ReportList from 'components/ReportList/ReportList';
import EmptyReportList from 'components/EmptyReportList/EmptyReportList';
import Loader from 'components/Loader/Loader';

import { useFetchReportsQuery } from '../redux/reportsApi';
import { selectToken } from '../redux/selectors';

export default function AllReports() {
  const clientToken = useSelector(selectToken);

  const {
    data: reports,
    isSuccess,
    isError,
    isLoading,
  } = useFetchReportsQuery(clientToken);

  return (
    <>
      {isSuccess && reports.length > 0 && <ReportList reports={reports} />}
      {(isError || (isSuccess && reports.length === 0)) && <EmptyReportList />}
      {isLoading && <Loader />}
    </>
  );
}
