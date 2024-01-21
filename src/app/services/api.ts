import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TO_DO_LIST_URL } from '../../constants/constants'

const baseQuery = fetchBaseQuery({
    baseUrl: TO_DO_LIST_URL,
});

export const api = createApi({
    reducerPath: 'splitApi',
    tagTypes: ['Tasks', 'Categories'],
    refetchOnMountOrArgChange: 30,
    baseQuery: baseQuery,
    endpoints: () => ({}),
});
