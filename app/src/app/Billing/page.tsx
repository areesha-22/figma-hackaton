import React from 'react'
import { RiVisaLine } from "react-icons/ri";
import { FaPaypal } from "react-icons/fa6";
import { MdOutlineCircle } from "react-icons/md";
import Image from 'next/image'

import { CiStar } from "react-icons/ci";
import { FaBitcoin } from "react-icons/fa6";
const page = () => {
  return (
    <div >
    <div className='flex'>
    <div className='pl-10 pt-14 '>
      <h1 className='font-bold text-xl '>Billing Info</h1>
     <p className='text-gray-400'> Please enter your billing info</p>
     <div className='flex gap-80 pt-12'>
      <h1 className='font-semibold text-base'>Name</h1>
      <h1 className='font-semibold text-base'>Phone Number</h1>
      </div>
      <div className='flex gap-36 pt-7 '>
       <div className='font-semibold text-base'><input placeholder='Your Name'></input></div>
      <div><input placeholder=' Phone Number'></input></div></div>
      <div className='flex gap-72 pt-6'>
      <h1 className='font-semibold text-base'>Address</h1>
      <h1 className='font-semibold text-base'>Town/City</h1></div>
      <div className='flex gap-40 pt-7'>
      <div><input placeholder='Address'></input></div>
     <div><input placeholder='Town/City'></input></div></div></div>

{/* 
//rental summary */}
<div>
    <div>
        <h1 className='font-bold text-xl pt-7'>Rental Summary</h1>
        <p className='font-medium text-sm text-gray-500 pt-7'>Prices may change depending on the length of the rental and the<br></br> price of your rental car.</p>
   <div className='flex gap-7 pt-6'>
    <div> <Image alt='car image' src={"/view1.svg"} width={132} height={108}></Image></div>
    <div>
    <h1 className='font-bold text-2xl  '>Nissan GT-R</h1>
    <div className='flex relative top-3 '>  <CiStar  className='hover:text-yellow-600 '/><CiStar className='hover:text-yellow-600 ' /><CiStar className='hover:text-yellow-600 ' /><CiStar className='hover:text-yellow-600 ' /><CiStar className='hover:bg-yellow-600 ' />440+ Reviewer </div></div></div>
   <div className='flex gap-64 pt-12'>
    <p className='text-gray-400 font-semibold text-base'>SubTotal</p>
    <p className='font-bold text-sm'>80.00$</p></div>
    <div className='flex gap-80 pt-9'>
    <p className='text-gray-400 font-semibold text-base'>Tax</p>
    <p className='font-bold text-sm'>$0</p></div>
    <div className='flex gap-28 pt-10'>
        <input placeholder='Apply promo Code'></input>
  <p className='font-semibold text-base'>Apply Now</p> </div>
   <div className='flex gap-24 pt-24'>
    <div>
    <h1 className='font-bold text-xl'>Total Rental Price</h1>
   <p className='font-medium text-sm text-gray-400'>Overall price and includes rental discount</p></div>
   <div className='font-bold text-3xl'>$80.00</div>  </div>
  </div></div>
</div>




{/* rental info */}

<div className='relative bottom-48'>
    <div>
    <h1 className='font-bold text-xl  '>Rental Info</h1>
     <p className='text-gray-400'> Please select your rental date</p>
    </div>
    <h1 className='pt-8 '>Pick-Up</h1>
    <div className='flex gap-64 pt-5'>
       
      <h1 className='font-semibold text-base'>Location</h1>
      <h1 className='font-semibold text-base'>Date</h1>
      </div>
      <div className='flex gap-24 pt-7 '>
      <div>
            
            <select name="country" id="country">
                <option value="USA">USA</option>
                <option value="pak">pak</option>
                <option value="ind">india</option>
                <option value="bang">bang</option> 
                <option value ="china">china</option>
                <option value="afghanistan">afghanistan</option>
</select></div>
                <div></div>
      <div> <input id="birthdate" type="date"></input></div></div>
      <div className='pt-6'>
      <h1 className='font-semibold text-base'>Time</h1>
      <div>
                    
                    <input id="appoint" type="time"></input>
                </div></div>

                <h1 className='pt-8 '>Drop-Up</h1>
    <div className='flex gap-64 pt-5'>
       
      <h1 className='font-semibold text-base'>Location</h1>
      <h1 className='font-semibold text-base'>Date</h1>
      </div>
      <div className='flex gap-24 pt-7 '>
      <div>
            
            <select name="country" id="country">
                <option value="USA">USA</option>
                <option value="pak">pak</option>
                <option value="ind">india</option>
                <option value="bang">bang</option> 
                <option value ="china">china</option>
                <option value="afghanistan">afghanistan</option>
</select></div>
                <div></div>
      <div> <input id="birthdate" type="date"></input></div></div>
      <div className='pt-6'>
      <h1 className='font-semibold text-base'>Time</h1>
      <div>
                    
                    <input id="appoint" type="time"></input>
                </div></div>
</div>
    
    {/* payment */}
    <div>
        <div> <h1 className='font-bold text-xl '>Payment Methood</h1>
     <p className='text-gray-400'> Please enter your payment method</p></div>
     <h1 className='pt-8 flex  gap-80'>Credit Card <span className='text-5xl text-blue-900'><RiVisaLine /></span></h1>
    <div className='flex gap-64 pt-5'>
       
      <h1 className='font-semibold text-base'>Card Number</h1>
      <h1 className='font-semibold text-base'>Expiration Date</h1>
      </div>
      <div className='flex gap-32 pt-7 '>
      <div>
            
            <select name="country" id="country">
                <option value="USA">USA</option>
                <option value="pak">pak</option>
                <option value="ind">india</option>
                <option value="bang">bang</option> 
                <option value ="china">china</option>
                <option value="afghanistan">afghanistan</option>
</select></div>
                <div></div>
      <div> <input id="birthdate" type="date"></input></div></div>
  
      <div className='flex gap-72 pt-7'>
 <h1 className='font-semibold text-base'>Card Holder</h1>
      <h1 className='font-semibold text-base'>CVC</h1> </div>
    
     <div className='flex gap-44 pt-7'>
     <input type="input" placeholder='Card Holder'></input>
   
     <input type="input" placeholder='CVC'></input>  </div>
               <div>
              <p className='flex gap-80 text-xl pt-9 font-semibold'><span className='flex'><MdOutlineCircle />PayPal </span><span className='flex text-[#167FC4] text-2xl'><FaPaypal /><span className='text-[#022273] text-xl'> PayPal</span></span></p>
               </div>
               <div>
              <p className='flex gap-80 text-xl pt-9 font-semibold'><span className='flex'><MdOutlineCircle />Bitcoin </span><span className='flex text-yellow-600 text-2xl'><FaBitcoin /><span className='text-black text-xl'> bitcoin</span></span></p>
               </div>
               
    </div>
    
    <div>
      <div className='pt-11'>
      <h1 className='font-bold text-xl '>Confirmation</h1>
     <p className='text-gray-400'> We are getting to the end. Just few clicks and your rental is ready!</p>
    </div>
    </div>
    </div>
  )
}

export default page
