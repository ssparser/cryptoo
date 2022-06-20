import axios from "axios";


const url='https://coinranking1.p.rapidapi.com/coins';


const options = {
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      'tiers[0]': '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '50',
      offset: '0'
    },
    headers: {
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
      'X-RapidAPI-Key': '278f0c7d44msh07315284969fbb9p17a7e4jsn26ee93c9ff9b'
    }
  };

  export const datacoins=async()=>{
       try{
           const {data:{data}} =await axios.get(url,options);
           return data;
       }
       catch(error)
       {
                console.log(error);
       }
   }
