import React from "react";
import Image from "next/image";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div className="text-white flex flex-col place-items-center gap-8 mb-10 mt-20">
      <div className = "flex gap-20 place-items-center">
            <Image
            src="/logo-rotated.webp"
            width={160}
            height={160}
            alt="company logo"
            className = "object-contain"
            />

            <div className = "flex flex-col gap-4 text-xs">
                <div className = "flex gap-4">
                    <p className="hover:underline hover:cursor-pointer">Home</p>
                    <p className="hover:underline hover:cursor-pointer">Articles</p>
                    <p className="hover:underline hover:cursor-pointer">Contact Us</p>
                </div>

                <div className = "flex place-items-center gap-2">
                    <EmailIcon />
                    <p>contact@megasisnetwork.com</p>
                </div>

                <div className = "flex place-items-center gap-2">
                    <TwitterIcon />
                    <p>@megasisnetwork</p>
                </div>

                <div className = "flex place-items-center gap-2">
                    <InstagramIcon />
                    <p>@megasisnetwork</p>
                </div>
            </div>
      </div>

      <p className = "text-xs">Copyright © 2022 - All Rights Reserved by MEGASIS Network</p>
    </div>
  );
};

export default Footer;
