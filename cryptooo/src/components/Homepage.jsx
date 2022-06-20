import React, { useEffect, useState } from 'react'
import millify from 'millify'
import { Typography,Row,Col,Statistic } from 'antd'
import {Link} from "react-router-dom";
import { useGetCryptosQuery } from '../services/Cryptoapi';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';
import {datacoins} from '../apis/Api';

const {Title}=Typography;

export default function Homepage() {

  
   useEffect(()=>{
      datacoins()
      .then((data)=>{
        console.log(data.stats.total);
        setnu(data.stats.totalCoins);
        setmarketcap(data.stats.totalMarketCap);
        setmarket(data.stats.totalMarkets);
        setvolume(data.stats.total24hVolume);
        setexchange(data.stats.totalExchanges);
      })
    },[]);

    const [nu ,setnu]=useState(2);
    const [exchange,setexchange]=useState(2);
    const [marketcap,setmarketcap]=useState(2);
    const [volume,setvolume]=useState(2);
    const[market,setmarket]=useState(2);

  return (
   
    <>
      <Title level={2} className="heading">Global crypto stats</Title>
      <Row>
          <Col span={12}>
            <Statistic title="Total Cryptocurrencies" value={millify(nu)}/>
          </Col>
          <Col span={12}>
            <Statistic title="Total Exchanges" value={millify(exchange)}/>
          </Col>
          <Col span={12}>
            <Statistic title="Total MarketCap" value={millify(marketcap)}/>
          </Col>
          <Col span={12}>
            <Statistic title="Total 24th Volume" value={millify(volume)}/>
          </Col>
          <Col span={12}>
            <Statistic title="Total Markets" value={millify(market)}/>
          </Col>
      </Row>

      <div className='home-heading-container'>
        <Title level={2} className="home-title">Cryptocurrencies</Title>
        <Title level={2} className="home-title"><Link to="/cryptocurrencies">Show more</Link></Title>
      </div>
      <Cryptocurrencies/>

      <div className='home-heading-container'>
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={2} className="home-title"><Link to="/news">Show more</Link></Title>
      </div>
      
   
    </>
  )
}
