import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const lolApi = createApi({
  reducerPath: "lolApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://ddragon.leagueoflegends.com/`,
  }),
  endpoints: (builder) => ({
    getData: builder.query<any, [string, string, string]>({
      query: ([name, version, language]) =>
        `cdn/${version}/data/${language}/${name}.json`,
    }),
    getLanguages: builder.query({
      query: () => `cdn/languages.json`,
    }),
    getVersions: builder.query({
      query: () => `api/versions.json`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetDataQuery, useGetVersionsQuery, useGetLanguagesQuery } =
  lolApi;
