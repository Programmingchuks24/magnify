import React from 'react'
import MainButton from './ui/MainButton';
import BoxLayout from './BoxLayout';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const MainPage = () => {
  return (
    <div className="text-white flex flex-col justify-items-center place-items-center mt-11 text-center gap-7">
      <p className="font-bold text-lg">World Class Business Solutions</p>

      <p className="text-sm w-[24.5rem]">
        More than a Consultancy. Your Partner in Strategy & Growth. Driving
        Innovation. Building Powerful Partnerships. Ensuring Your Success in the
        Digital Age.
      </p>

      <MainButton>Book Introductory Call</MainButton>

      <BoxLayout />

      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="email" placeholder="Email" />
        <Button type="submit">Subscribe</Button>
      </div>

      <p className = "italic text-white">London, United Kingdom</p>
    </div>
  );
}

export default MainPage