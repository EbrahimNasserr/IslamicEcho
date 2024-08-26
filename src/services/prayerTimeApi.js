import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const prayerApi = createApi({
  reducerPath: 'prayerApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://api.aladhan.com/v1/' }),
  endpoints: (builder) => ({
    getPrayerTimesByCity: builder.query({
      query: ({ city, country }) => `timingsByCity?city=${city}&country=${country}&method=5`,
    }),
  }),
});

export const { useGetPrayerTimesByCityQuery } = prayerApi;
export default prayerApi;
