"use client"
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Image from "next/image"
import MainButton from './ui/MainButton';

const Header = () => {
  return (
    <div className=" text-white flex justify-between px-2 pt-5 items-center">
      
      <Image
        src="/header_pic1.png"
        alt="new image"
        width={150}
        height={150}
      />
      

      <div className="hidden md:flex gap-5 place-items-center">
        <p>Articles</p>
        <MainButton>
        Book Introductory call
      </MainButton>
      </div>

      <div className= "md:hidden">
        <Image
          src="/link.png"
          alt="new image"
          width={50}
          height={50}
        />
      
      </div>

    </div>
  );
}

export default Header