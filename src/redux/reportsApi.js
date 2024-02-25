import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const reportApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://profile.short.io/tmp',
  }),
  tagTypes: ['Reports'],
  endpoints: builder => ({
    fetchReports: builder.query({
      query: clientToken => ({
        url: `/abuse-reports?clientToken=${clientToken}`,
      }),
      providesTags: ['Reports'],
    }),
    addReport: builder.mutation({
      query: data => ({
        url: `/abuse-report`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Reports'],
    }),
  }),
});

export const { useFetchReportsQuery, useAddReportMutation } = reportApi;

export default reportApi;
