import React, { useEffect, useState } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card,Row,Col,Input } from 'antd'
import { datacoins } from '../apis/Api';
import { useParams } from 'react-router-dom';

export default function CryptoDetails() {


  const [cryptos,setcryptos]=useState([]);
  const [search,setsearch]=useState([]);

  useEffect(()=>{
    datacoins() .then((data)=>{
        console.log(data);
        setcryptos(data.coins);
    })
  },[])

  const {coinid}=useParams()
  return (
    <div>
      <input type="text" placeholder="Bitcoin" onChange={(e)=>{
        setsearch(e.target.value)
      }}></input>
      <br></br>
      <br></br>
      <Row gutter={[32,32]} className="crypto-card-container">
      {cryptos.filter((currency)=>{
        if(search=="")
        {
          return currency
        }else if(currency.name.toLowerCase().includes(search.toLowerCase()))
        {
          return currency
        }
        
      }).map((currency)=>(
        
        <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
          <Link to='/crypto/${currency.id}'>
           <Card title={currency.name} 
                  extra={<img className='crypto-image' key={currency.id} src={currency.iconUrl}/>}
                  hoverable>
                      <p key={currency.id}><span>Price : </span>{millify(currency.price)} $</p>
                      <p key={currency.id}><span>Market Cap : </span>{millify(currency.marketCap)} $</p>

                 </Card>
                 </Link>
          </Col>
         
      ))

      }
       </Row>
      </div>
  )
}
