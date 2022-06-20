import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoapiheaders={
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
      'X-RapidAPI-Key': '278f0c7d44msh07315284969fbb9p17a7e4jsn26ee93c9ff9b',
}

const baseurl='https://coinranking1.p.rapidapi.com'

const createrequest=(url)=>({url,headers:cryptoapiheaders})

export const Cryptoapi=createApi({
    reducerPath:'cryptoApi',
    baseQuery: fetchBaseQuery({baseurl}),
    endpoints: (builder)=>({
        getCryptos:builder.query({
            query:()=>createrequest('/coins')
        })
    })
});

export const{
    useGetCryptosQuery,
}=Cryptoapi;