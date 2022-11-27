import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const itemApi = createApi({
  reducerPath: "itemsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3002" }),
  endpoints: (builder) => ({
    getItems: builder.query<Item[], void>({
      query: () => "items",
    }),
  }),
});

export const { useGetItemsQuery } = itemApi;
