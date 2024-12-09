import React from "react";
import { CiHeart } from "react-icons/ci";
import { MdLocalGasStation } from "react-icons/md";
import { MdWifiTethering } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import Link from "next/link"
type Props ={
 heading: string,
 sub: string,
  price: string,
  imageUrl: string,
 icons:string,
}

const InfoCard = ({heading, sub, price,imageUrl,icons}: Props) => {

  return (
    
    <div className="border-gray-400 border-b-2 border-t-2 border-y-2 w-72 h-96 text-black flex flex-col items-center rounded-lg m-2 relative bottom-32  ">
      <div className="flex gap-4">
        <p className="font-bold"></p>
        <p className="flex gap-14 font-bold text-xl">{heading} <CiHeart /></p>
      </div>
      <div className="flex gap-4">
        <p className="font-bold "></p>
        <p className="text-[#90A3BF] relative right-16">{sub}</p>
      </div>
      <div className="flex justify-center mb-2">
        <img src={imageUrl} alt={`${heading}'s profile`} className="w-44 h-44 rounded-full" /> {/* Adjust size and shape as needed */}
      </div>
      <div className="flex gap-4">
        <p className="font-bold"></p>
        <p className="flex text-[#90A3BF] gap-2 ">{icons}<span className="flex"> <MdLocalGasStation />90L</span> <MdWifiTethering /> Manual  <FaUserFriends /><span className="flex">2people </span> </p></div>
      <div className="flex gap-4">
        <p className="font-bold"></p>
        
        <div className="flex mt-6"><p className="font-bold text-xl">{price}</p>
      </div>
      <div className="mt-6">
       <Link href="/Billing"> <button className="bg-[#3563E9] w-28 h-11 rounded-xl text-white font-semibold text-base">Rent Now</button></Link>
      </div></div>
      
    </div>
  );
};

export default InfoCard;