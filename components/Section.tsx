import React from 'react'
import Cards from './Cards'

const Section = () => {
  return (
    <div className = "text-white flex flex-col place-items-center md:place-items-start">
        <p className = "text-[#ebebe3]">Clients</p>

        <p className = "text-2xl">Our Partnerships,</p>
        <p className = "md:text-xl">We Value Your Trust</p>

        <br/>

        <Cards/>
    </div>
  )
}

export default Section