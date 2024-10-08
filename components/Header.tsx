"use client"
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Image from "next/image"
import MainButton from './ui/MainButton';

const Header = () => {
  return (
    <div className=" text-white flex justify-between px-4 pt-5 items-center">
      <div>
        <Image
          src="/company_logo_new.webp"
          alt="new image"
          width={178}
          height={178}
        />
      </div>

      <div className="hidden md:flex gap-5 place-items-center">
        <p>Articles</p>
        <MainButton>
        Book Introductory call
      </MainButton>
      </div>

      <div className= "md:hidden">
        <MenuIcon className="w-16 h-8" />
      </div>

    </div>
  );
}

export default Header