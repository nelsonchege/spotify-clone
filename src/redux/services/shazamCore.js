import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'a0fc63e42fmsh2406350d6c043c5p1ea40ajsnb1192e377444');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopChats: builder.query({ query: () => '/charts/world' }),
  }),
});

export const { useGetTopChatsQuery } = shazamCoreApi;
