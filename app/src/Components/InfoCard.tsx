import React from "react";
import { CiHeart } from "react-icons/ci";
import { MdLocalGasStation } from "react-icons/md";
import { MdWifiTethering } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link"

type Props = {
  heading: string,
  sub: string,
  price: string,
  ImageUrl: string,
  icons: string,
}

const InfoCard = ({ heading, sub, price, ImageUrl, icons }: Props) => {
  return (
    <div className="border-gray-400 border-b-2 border-t-2 border-y-2 w-72 md:w-80 lg:w-96 h-80 md:h-100 lg:h-120 text-black flex flex-col  items-center rounded-lg m-2 relative bottom-32 md:bottom-40 lg:bottom-48">
      <div className="flex gap-4">
        <p className="font-bold"></p>
        <p className="flex gap-14 font-bold text-xl md:text-2xl lg:text-3xl">{heading} <CiHeart /></p>
      </div>
      <div className="flex gap-4">
        <p className="font-bold "></p>
        <p className="text-[#90A3BF] relative right-16 md:right-20 lg:right-24">{sub}</p>
      </div>
      <div className="flex justify-center mb-2">
        <Image src={ImageUrl} alt={`${heading}'s profile`} className="rounded-full" width={200} height={200} />
        {/* Adjust size and shape as needed */}
      </div>
      <div className="flex gap-4">
        <p className="font-bold"></p>
        <p className="flex text-[#90A3BF] gap-2 ">{icons}<span className="flex"> <MdLocalGasStation />90L</span> <MdWifiTethering /> Manual <FaUserFriends /><span className="flex">2people </span> </p>
      </div>
      <div className="flex gap-4">
        <p className="font-bold"></p>
        <div className="flex mt-6"><p className="font-bold text-xl md:text-2xl lg:text-3xl">{price}</p> </div>
        <div className="mt-6">
          <Link href="/Billing">
            <button className="bg-[#3563E9] w-28 md:w-32 lg:w-36 h-11 rounded-xl text-white font-semibold text-base md:text-lg lg:text-xl">Rent Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default InfoCard;