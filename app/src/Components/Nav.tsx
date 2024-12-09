import React from 'react'
import { CiSearch } from "react-icons/ci";
import { VscSettings } from "react-icons/vsc";
import { FaHeart } from "react-icons/fa";
import { FaBell,FaGear  } from "react-icons/fa6";
import Image from 'next/image';
const Nav = () => {
  return (
    <div>
      <div className='max-w-7xl  flex justify-between px-9 border-gray-300  '>
        <h1 className='font-bold text-3xl text-[#3563E9] mt-7'>
      MORENT</h1>
      <div className='md:flex gap-8 hidden'><span className='text-gray-400 text-base mt-7 '> <CiSearch /></span><input placeholder='Search something here' className='font-medium text-sm rounded-full'></input><span className='text-gray-400 text-base mt-7'><VscSettings /></span></div>
      <span className='text-gray-400 text-lg flex gap-10 pt-8'><FaHeart />
      <FaBell />
      <FaGear />
      <Image width={44}  height={44} alt='profile image 'src={"/Profil.svg"}
     
      ></Image> </span></div>
      
    </div>
  )
}

export default Nav
