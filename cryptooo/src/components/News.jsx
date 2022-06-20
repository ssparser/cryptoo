import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Card,Row,Col,Input,Typography, Avatar } from 'antd'
import moment from 'moment';

const {Title}=Typography;
const { Text} = Typography;
const { Meta } = Card;


export default function News() {
  
  const[news,setnews]=useState([]);
  const options = {
    method: 'GET',
    url: 'https://bing-news-search1.p.rapidapi.com/news/search',
    params: {q: 'crypto', freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off'},
    headers: {
      'X-BingApis-SDK': 'true',
      'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
      'X-RapidAPI-Key': '278f0c7d44msh07315284969fbb9p17a7e4jsn26ee93c9ff9b'
    }
  };
useEffect(()=>{
  axios.request(options).then(function (response) {
    
    setnews(response.data.value)
    
  }).catch(function (error) {
    console.error(error);
  });
},[])

console.log(news)
  return (
    <>

     <Row gutter={[24,24]} className="news-card-container">
        
        
         {news.map((talk)=>

              <Col xs={24} sm={12} lg={8} className="news-card" key={talk.id}>

                

                   <Card 
                   hoverable>
                      <a href={talk.url} target="_blank" rel='nonrefferer'>
                        <div className="news-image-container">
                          <Title className="news-title" level={4}>{talk.name}</Title>
                          <img style={{maxwidth:'200px', maxheight:'100px'}} src={talk.image.thumbnail.contentUrl} ></img>
                        </div>

                        <p>{talk.description} </p>
                        <Meta
                            avatar={<Avatar src={talk.provider[0]?.image?.thumbnail?.contentUrl} />}
                            title={talk.provider[0]?.name}
                            description={moment(talk.datePublished).startOf('ss').fromNow()}
                        />
                                      
                       </a>
                  </Card>
 
       
 
              </Col>
              
              )}
          </Row>
    </>
    
  )
}
