import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
    
  return (
    <div className="w-full max-w-[1350px] mx-auto h-[100px] flex items-center justify-between px-[50px]">
      <img
        className="block cursor-pointer"
        src={assets.logo}
        alt="logo"
      />
      <ul className="flex gap-10">
        <li>Certification</li>
        <li>Mentorship</li>
        <li>Proffesional</li>
        <li>Learning</li>
      </ul>
      <button className="bg-[#E7E6ED] py-2 px-3 rounded-full flex items-center gap-2">
        Msspace
        <div>
          <img className="w-[7px] pt-1" src={assets.arrow} alt="arrow" />
        </div>
      </button>
    </div>
  );
};

export default Header;
