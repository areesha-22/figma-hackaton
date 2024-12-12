import React from 'react'
import { FaHome, FaCar, FaWallet } from "react-icons/fa";
import { IoBarChart, IoMoonOutline } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { RiSettingsFill } from "react-icons/ri";
import { CiCircleInfo } from "react-icons/ci";
import { WiMoonAltNew } from "react-icons/wi";
import { MdShoppingBag, MdOutlineWbSunny } from "react-icons/md";
import Footer from '@/Components/Footer'
import Image from "next/image"

import Link from 'next/link'
const page = () => {
  return (
    <div className="p-4 sm:p-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 bg-gray-100 p-4 rounded-lg shadow">
          <div className="text-gray-500 font-semibold text-xs mb-4">M A I N M E N U</div>
          <ul className="space-y-4">
             <Link href='/'><li className="flex items-center gap-4 hover:text-[#3563E9] text-gray-500"><FaHome /> Dashboard</li></Link>
             <Link href='/Ctype'><li className="flex items-center gap-4 hover:text-[#3563E9] text-gray-500"><FaCar /> Car Rent</li></Link>
             <Link href='/Rent'><li className="flex items-center gap-4 hover:text-[#3563E9] text-gray-500"><IoBarChart /> Insight</li></Link>
             <Link href='/Billing'><li className="flex items-center gap-4 hover:text-[#3563E9] text-gray-500"><FaWallet /> Reimburse</li></Link>
             <Link href='/'><li className="flex items-center gap-4 hover:text-[#3563E9] text-gray-500"><FaRegMessage /> Inbox</li></Link>
             <Link href='/'><li className="flex items-center gap-4 hover:text-[#3563E9] text-gray-500"><SlCalender /> Calendar</li></Link>
          </ul>
          <div className="text-gray-500 font-semibold text-xs pt-12">P R E F E R E N C E S</div>
          <ul className="space-y-4 mt-4">
            <li className="flex items-center gap-4 hover:text-[#3563E9] text-gray-500"><RiSettingsFill /> Settings</li>
            <li className="flex items-center gap-4 hover:text-[#3563E9] text-gray-500"><CiCircleInfo /> Help & Center</li>
            <li className="flex items-center gap-4 hover:text-[#3563E9] text-gray-500">
              <MdShoppingBag /> Dark Mode <MdOutlineWbSunny className="text-blue-600" /> <IoMoonOutline />
            </li>
          </ul>
          <div className="text-gray-500 font-semibold text-xl mt-12">Log Out</div>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-3/4 space-y-8">
          {/* Rental Details */}
          <div>
            <h1 className="font-bold text-2xl">Details Rental</h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14421.78265054028!2d68.36003015000003!3d25.356376099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c7041857f209b%3A0xd6d38f829babc717!2sLatifabad%20Unit%2011%20Latifabad%2C%20Hyderabad%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1733790847477!5m2!1sen!2s"
              className="w-full h-64 md:h-80 rounded-lg mt-4"
              loading="lazy"
            ></iframe>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mt-6">
              <Image src={"/view1.svg"} width={132} height={72} alt="car image" />
              <div>
                <h2 className="text-2xl font-bold">Nissan GT - R</h2>
                <p className="text-gray-500">Sports</p>
              </div>
            </div>
          </div>

          {/* Pick-Up and Drop-Up */}
          <div className="space-y-8">
            <div>
              <h2 className="text-lg font-bold">Pick-Up</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div>
                  <label className="font-bold text-lg block">Location:</label>
                  <select className="w-full border p-2 rounded mt-2">
                    <option>Select your city</option>
                  </select>
                </div>
                <div>
                  <label className="font-semibold text-base block">Date:</label>
                  <input type="date" className="w-full border p-2 rounded mt-2" />
                </div>
                <div>
                  <label className="font-semibold text-base block">Time:</label>
                  <input type="time" className="w-full border p-2 rounded mt-2" />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-bold">Drop-Up</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div>
                  <label className="font-bold text-lg block">Location:</label>
                  <select className="w-full border p-2 rounded mt-2">
                    <option>Select your city</option>
                  </select>
                </div>
                <div>
                  <label className="font-semibold text-base block">Date:</label>
                  <input type="date" className="w-full border p-2 rounded mt-2" />
                </div>
                <div>
                  <label className="font-semibold text-base block">Time:</label>
                  <input type="time" className="w-full border p-2 rounded mt-2" />
                </div>
              </div>
            </div>
          </div>

          {/* Total Rental Price */}
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div>
              <h2 className="font-bold text-xl">Total Rental Price</h2>
              <p className="text-gray-500">Overall price and includes rental discount</p>
            </div>
            <div className="font-bold text-3xl">$80.00</div>
          </div>

          {/* Top 5 Car Rentals */}
          <div>
            <h2 className="font-bold text-xl">Top 5 Car Rental</h2>
            <div className="flex flex-wrap gap-4 mt-4">
              <Image src={"/E.png"} width={207} height={100} alt="Top rental cars" />
              <div className="flex-1 grid grid-cols-2 gap-4">
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-500"><WiMoonAltNew className="text-[#080a0b]" /> Sport Car</li>
                  <li className="flex items-center text-gray-500"><WiMoonAltNew className="text-[#0D3559]" /> SUV</li>
                  <li className="flex items-center text-gray-500"><WiMoonAltNew className="text-[#0D3559]" /> Coupe</li>
                  <li className="flex items-center text-gray-500"><WiMoonAltNew className="text-[#0D3559]" /> Hatchback</li>
                  <li className="flex items-center text-gray-500"><WiMoonAltNew className="text-[#0D3559]" /> MPV</li>
                </ul>
                <ul className="space-y-4">
                  <li className="font-semibold text-sm">17,439</li>
                  <li className="font-semibold text-sm">9,478</li>
                  <li className="font-semibold text-sm">18,197</li>
                  <li className="font-semibold text-sm">12,510</li>
                  <li className="font-semibold text-sm">12,510</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h2 className="font-bold text-xl">Recent Transactions</h2>
              <div className="space-y-4 mt-4">
                <Image src={"/car1.svg"} width={114} height={36} alt="Recent car" />
                <Image src={"/car2.svg"} width={114} height={36} alt="Recent car" />
                <Image src={"/car3.svg"} width={114} height={36} alt="Recent car" />
                <Image src={"/car4.svg"} width={114} height={36} alt="Recent car" />
              </div>
            </div>
            <div>
              <div className="space-y-4">
                <div className="text-xl font-bold">Nissan GT - R<br /><span className="text-gray-500">Sports</span></div>
                <div className="text-xl font-bold">Koenigsegg<br /><span className="text-gray-500">Sports</span></div>
                <div className="text-xl font-bold">Rolls-Royce<br /><span className="text-gray-500">Sports</span></div>
                <div className="text-xl font-bold">CR - V<br /><span className="text-gray-500">Sports</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default page
