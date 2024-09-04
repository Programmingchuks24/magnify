"use client"
import React, { useState } from 'react'
import { Button } from './ui/MovingBorder'

const  BoxLayout = () => {

  const [value, setValue] = useState([
    {
      value:"26.2M+",
      Text:"Social Media Engagements"
    },

    {
      value:"12.4M+",
      Text:"Value Created"
    },

    {
      value:"36+",
      Text:"Facilitated Patnerships"
    },

    {
      value:"100%",
      Text:"Client Satisfaction"
    }
  ])
  return (
    <div className = "grid grid-cols-2 gap-6 md:grid-cols-4">

      {value.map((item, index) => (
        
        <Button borderRadius='0rem' key={index}>
          <div >
            <p className = "font-bold">{item.value}</p>
            {item.Text}
          </div>
          
        </Button>
      ))}


    </div>
  )
}

export default BoxLayout