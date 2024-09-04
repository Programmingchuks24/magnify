"use client"
import React from "react";

type childrenProps = {
    children: React.ReactNode;
    onClick?: () => void;
    className?: "hidden" | "block";
};

const MainButton = ({ children, onClick, className }: childrenProps) => {
  return (
    <div>
      <button 
        className={`${className} inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-white bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50}`} 
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default MainButton;
