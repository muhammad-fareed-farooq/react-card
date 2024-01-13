import React from 'react'
import { Product_Card } from './Prouduct'

const Card_Component = () => {

    const arr =  [{
      img_url:"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D",
      title:"dfvhsdbhbhc",
      rating:"dcsdsdfs",
      sold:"klkskd",
      dis_price:22545,
      orignal_price:2125
      
      
      
      }] 
  return (
    <div>
      <Product_Card/>
    </div>
  )
}

export default Card_Component

