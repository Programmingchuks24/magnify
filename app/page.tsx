import React from 'react'
import Header from "@/components/Header"
import MainPage from '@/components/MainPage'
import Quote from '@/components/Quote'
import Section from '@/components/Section'

const page = () => {
  return (
    <div className = "bg-black w-auto overflow-hidden h-[90rem]">

      <div className = "fixed top-0 left-0 w-[100%] z-50">
        <Header/>
      </div>

      <div className = "mt-[13rem] flex flex-col gap-8">
        <MainPage/>
        <Quote/>
        <Section/>
      </div>
      
    </div>
  )
}

export default page