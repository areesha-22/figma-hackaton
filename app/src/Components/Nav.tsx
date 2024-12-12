import React from 'react'
import { CiSearch } from "react-icons/ci";
import { VscSettings } from "react-icons/vsc";
import { FaHeart } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import Image from 'next/image';

const Nav = () => {
  return (
    <div>
      <div className="max-w-7xl flex justify-between px-9 border-gray-300 md:px-16 lg:px-20">
        <h1 className="font-bold text-2xl text-[#3563E9] mt-7 md:text-4xl lg:text-3xl">MORENT</h1>
        <div className="md:flex gap-8 hidden lg:w-1/2">
          <span className="text-gray-400 text-base mt-7 md:text-lg lg:text-xl">
            <CiSearch />
          </span>
          <input placeholder='Search something here' className='font-medium text-sm rounded-full md:w-80 lg:w-96'></input>
          <span className="text-gray-400 text-base mt-7 md:text-lg lg:text-xl">
            <VscSettings />
          </span>
        </div>
        <span className="text-gray-400 text-2xl flex pt-8 md:gap-4 lg:gap-6">
          <FaHeart />
          <FaBell />
          <FaGear />
          <Image width={44} height={44} alt='profile image' src={"/Profil.svg"} />
        </span>
      </div>
    </div>
  )
}

export default Nav