import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const quranApi = createApi({
  reducerPath: 'quranApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.alquran.cloud/v1/' }),
  endpoints: (builder) => ({
    getSurahs: builder.query({
      query: () => "surah",
    }),
    getSurahsAyahs: builder.query({
      query: (surahNumber) => `surah/${surahNumber}/ar.alafasy`,
    }),
    getAyahsTrans: builder.query({
      query: (surahNumber) => `surah/${surahNumber}/en.asad`,
    }),
  }),
});

export const { useGetSurahsQuery, useGetSurahsAyahsQuery, useGetAyahsTransQuery } = quranApi;
