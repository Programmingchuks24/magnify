import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteCards'


const testimonials = [

    {
        quote:" Megasis Network’s software development team delivered a reliable patient management system, while their digital marketing services attracted a 75% increase in online appointment bookings. Their innovative approach truly set us apart from competitors.",
        name:"Michael T., COO",
        title:"NairaLeuxe"
    },

    {
        quote:" Megasis Network’s software development team delivered a reliable patient management system, while their digital marketing services attracted a 75% increase in online appointment bookings. Their innovative approach truly set us apart from competitors.",
        name:"Michael T., COO",
        title:"NairaLeuxe"
    },

    {
        quote:" Megasis Network’s software development team delivered a reliable patient management system, while their digital marketing services attracted a 75% increase in online appointment bookings. Their innovative approach truly set us apart from competitors.",
        name:"Michael T., COO",
        title:"NairaLeuxe"
    },

    {
        quote:" Megasis Network’s software development team delivered a reliable patient management system, while their digital marketing services attracted a 75% increase in online appointment bookings. Their innovative approach truly set us apart from competitors.",
        name:"Michael T., COO",
        title:"NairaLeuxe"
    },

    {
        quote:" Megasis Network’s software development team delivered a reliable patient management system, while their digital marketing services attracted a 75% increase in online appointment bookings. Their innovative approach truly set us apart from competitors.",
        name:"Michael T., COO",
        title:"NairaLeuxe"
    }
]
const Cards = () => {
  return (
    
    <InfiniteMovingCards
    items={testimonials}
    direction="right"
    speed="slow"
    pauseOnHover={false}
    />
    
  )
}

export default Cards