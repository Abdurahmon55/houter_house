import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const goodsApi = createApi({
    reducerPath: 'goodsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    endpoints: (bulid) => ({
        getGoods: bulid.query({
            query: () => `/comments`,
        })
    })
});

export const {useGetGoodsQuery}= goodsApi;
