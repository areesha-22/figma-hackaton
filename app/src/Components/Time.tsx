"use client"

import React, { useState } from 'react';
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";
interface Props {
  location:string,
  date:number,
  time:number
}

const PickUp = ({  }: Props) => {
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleLocationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLocation(event.target.value);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTime(event.target.value);
  };

  return (
    <div>
        <div  className='flex'>
    <div className='relative bottom-56 '>
          <h2 className='text-lg-'>Pick-Up</h2>
      <div className='flex'>
      
        <div className='flex'>
        <label htmlFor="location" className='font-bold text-lg'>Location:</label><br></br>
        <select id="location" value={location} onChange={handleLocationChange}  className="relative top-6 right-16">
          <option >Select your city</option>
        
        </select>
      </div>
      <div>
        <label htmlFor="date" className='font-bold text-lg'>Date:</label><br></br>
        <input type="date" id="date" value={date} onChange={handleDateChange}  className="relative top-3 right-5"/>
      </div>
      <div>
        <label htmlFor="time" className='font-bold text-lg'>Time:</label><br></br>
        <input type="time" id="time" value={time} onChange={handleTimeChange}  className="relative top-4" />
      </div>
     <button className="bg-[#3563E9] w-14 h-14 text-white flex text-center justify-center content-center rounded-lg relative left-14 ">
     <div className="flex relative top-4">< FaArrowUpLong/>
     <FaArrowDownLong /></div>
     </button></div>
    </div>
    <div className='relative bottom-56 left-20'>
          <h2 className='text-lg-'>DROP-Up</h2>
      <div className='flex'>
      
        <div className='flex'>
        <label htmlFor="location" className='font-bold text-lg'>Location:</label><br></br>
        <select id="location" value={location} onChange={handleLocationChange}  className="relative top-6 right-16">
          <option value="">Select your city</option>
        
        </select>
      </div>
      <div>
        <label htmlFor="date" className='font-bold text-lg'>Date:</label><br></br>
        <input type="date" id="date" value={date} onChange={handleDateChange}  className="relative top-3 right-5"/>
      </div>
      <div>
        <label htmlFor="time" className='font-bold text-lg'>Time:</label><br></br>
        <input type="time" id="time" value={time} onChange={handleTimeChange}  className="relative top-4" />
      </div>
     
    </div></div></div></div>
  );
};

export default PickUp;