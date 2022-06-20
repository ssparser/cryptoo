import React from 'react'


export default function Exchanges() {
  const options = {
    method: 'GET',
    headers: {
      'X-BingApis-SDK': 'true',
      'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
      'X-RapidAPI-Key': '278f0c7d44msh07315284969fbb9p17a7e4jsn26ee93c9ff9b'
    }
  };
  
  function change(query){
  fetch('https://bing-news-search1.p.rapidapi.com/news/search?q=${query}&freshness=Day&textFormat=Raw&safeSearch=Off', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));}

    change('crypto')
  return (
    <div>Exchanges
      
    </div>
  )
}
