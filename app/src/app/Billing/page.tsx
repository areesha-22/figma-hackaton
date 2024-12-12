import React from 'react'

import { FaPaypal } from "react-icons/fa6";
import { MdOutlineCircle } from "react-icons/md";
import { FaRegSquare } from "react-icons/fa6";
import { AiOutlineSafetyCertificate} from "react-icons/ai";
import Image from 'next/image'
import Link from "next/link"
import { CiStar } from "react-icons/ci";
import { FaBitcoin } from "react-icons/fa6";
import Footer from "@/Components/Footer"

const Page = () => {
  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-12">
      <div className="flex ">
        <div className="w-full lg:w-1/2 xl:w-1/3 p-6 text-center">
          <h1 className="font-bold text-xl">Billing Info</h1>
          <p className="text-gray-400">Please enter your billing info</p>
          <div className="flex  pt-12">
            <div className="w-full lg:w-1/2 xl:w-1/3 p-6">
              <h1 className="font-semibold text-base">Name</h1>
              <input type="text" placeholder="Your Name" className="w-full p-2 mt-2 border border-gray-300 rounded-lg" />
            </div>
            <div className="w-full lg:w-1/2 xl:w-1/3 p-6">
              <h1 className="font-semibold text-base">Phone Number</h1>
              <input type="tel" placeholder="Phone Number" className="w-full p-2 mt-2 border border-gray-300 rounded-lg" />
            </div>
          </div>
          <div className="flex flex-wrap justify-center pt-6">
            <div className="w-full lg:w-1/2 xl:w-1/3 p-6">
              <h1 className="font-semibold text-base">Address</h1>
              <input type="text" placeholder="Address" className="w-full p-2 mt-2 border border-gray-300 rounded-lg" />
            </div>
            <div className="w-full lg:w-1/2 xl:w-1/3 p-6">
              <h1 className="font-semibold text-base">Town/City</h1>
              <input type="text" placeholder="Town/City" className="w-full p-2 mt-2 border border-gray-300 rounded-lg" />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 xl:w-1/3 p-6 text-center">
          <h1 className="font-bold text-xl">Rental Summary</h1>
          <p className="text-gray-400">Prices may change depending on the length of the rental and the price of your rental car.</p>
          <div className="flex flex-wrap justify-center pt-12">
            <div className="w-full lg:w-1/2 xl:w-1/3 p-6">
              <Image alt='car image' src={"/View1.svg"} width={132} height={108} />
            </div>
            <div className="w-full lg:w-1/2 xl:w-1/3 p-6">
              <h1 className="font-bold text-2xl">Nissan GT-R</h1>
              <div className="flex relative top-3">
                <CiStar className='hover:text-yellow-600' />
                <CiStar className='hover:text-yellow-600' />
                <CiStar className='hover:text-yellow-600' />
                <CiStar className='hover:text-yellow-600' />
                <CiStar className='hover:bg-yellow-600' />
                440+ Reviewer
              </div>
            </div>
          </div>
          <div className="flex  pt-12">
            <div className="w-full lg:w-1/2 xl:w-1/3 p-6">
              <h1 className="font-semibold text-base">SubTotal</h1>
              <p className="font-bold text-sm">$80.00</p>
            </div>
            <div className="w-full lg:w-1/2 xl:w-1/3 p-6">
              <h1 className="font-semibold text-base">Tax</h1>
              <p className="font-bold text-sm">$0</p>
            </div>
          </div>
          <div className="flex  pt-12">
            <div className="w-full lg:w-1/2 xl:w-1/3 p-6">
               <input type="text" placeholder="Apply promo Code" className="w-full p-2 mt-2 border border-gray-300 rounded-lg" />
            </div>
            <div className="w-full lg:w-1/2 xl:w-1/3 p-6">
              <p className="font-semibold text-base">Apply Now</p>
            </div>
          </div>
          <div className="flex  pt-12">
            <div className="w-full lg:w-1/2 xl:w-1/3 p-6">
              <h1 className="font-bold text-xl">Total Rental Price</h1>
              <p className="font-medium text-sm text-gray-400">Overall price and includes rental discount</p>
            </div>
            <div className="w-full lg:w-1/2 xl:w-1/3 p-6">
              <p className="font-bold text-3xl">$80.00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex  pt-12">
        <div className="w-full lg:w-1/2 xl:w-1/3 p-6 ">
          <h1 className="font-bold text-xl">Rental Info</h1>
          <p className="text-gray-400">Please select your rental date</p>
          <div className="flex  pt-12">
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
                </div><br></br>
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
                </div><br></br>
                <div>
                  <label className="font-semibold text-base block">Time:</label>
                  <input type="time" className="w-full border p-2 rounded mt-2" />
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex  pt-12">
        <div className="w-full lg:w-1/2 xl:w-1/3 p-6 ">
          <h1 className="font-bold text-xl">Payment Method</h1>
          <p className="text-gray-400">Please enter your payment method</p>
          <div className="flex  pt-12grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div>
              <h1 className="font-semibold text-base">Credit Card</h1>
              <div className="flex  pt-6">
                <div>
                  <h1 className="font-semibold text-base">Card Number</h1>
                  <input type="text" placeholder="Card Number" className="w-full p-2 mt-2 border border-gray-300 rounded-lg" />
                </div>
                <div>
                  <h1 className="font-semibold text-base">Expiration Date</h1>
                  <input type="date" className="w-full border p-2 rounded mt-2" />
                </div>
              </div>
              <div className="flex  pt-6">
                <div className="w-full lg:w-1/2 xl:w-1/3 p-6">
                  <h1 className="font-semibold text-base">Card Holder</h1>
                  <input type="text" placeholder="Card Holder" className="w-full p-2 mt-2 border border-gray-300 rounded-lg" />
                </div>
                <div className="w-full lg:w-1/2 xl:w-1/3 p-6">
                  <h1 className="font-semibold text-base">CVC</h1>
                  <input type="text" placeholder="CVC" className="w-full p-2 mt-2 border border-gray-300 rounded-lg" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex pt-12">
            <div className="w-full lg:w-1/2 xl:w-1/3 p-6">
              <p className="flex gap-80 text-xl pt-9 font-semibold">
                <span className="flex">
                  <MdOutlineCircle />
                  PayPal
                </span>
                <span className="flex text-[#167FC4] text-2xl">
                  <FaPaypal />
                  <span className="text-black text-xl">PayPal</span>
                </span>
              </p>
            </div>
          </div>
          <div className="flex  pt-12">
            <div className="w-full lg:w-1/2 xl:w-1/3 p-6">
              <p className="flex gap-80 text-xl pt-9 font-semibold">
                <span className="flex">
                  <MdOutlineCircle />
                  Bitcoin
                </span>
                <span className="flex text-yellow-600 text-2xl">
                  <FaBitcoin />
                  <span className="text-black text-xl">Bitcoin</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex pt-12">
        <div className="w-full lg:w-1/2 xl:w-1/3 p-6 text-center">
          <h1 className="font-bold text-xl">Confirmation</h1>
          <p className="text-gray-400">We are getting to the end. Just few clicks and your rental is ready!</p>
          <div className="flex  pt-12">
            <div className="w-full ">
              <div className="bg-[#F6F7F9] border-gray-200 flex border-6 pt-12 gap-4">
                <FaRegSquare />
                I agree with sending an Marketing and newsletter emails. No spam promissed!
              </div>
            </div>
          </div>
<div className="flex  pt-12">
            <div className="w-full ">
              <div className="bg-[#F6F7F9] border-gray-200 flex border-6 pt-9 gap-4">
                <FaRegSquare />
                I agree with our terms and conditions and privacy policy.
              </div>
            </div>
          </div>
          <div className="flex pt-16">
            <div className="w-full lg:w-1/2 xl:w-1/3 p-6">
              <Link href="/Detail">
                <button className="w-36 h-14 bg-[#3563E9] font-bold text-base text-white rounded-xl">Rent Now</button>
              </Link>
            </div>
          </div>
          <div className="flex  pt-16">
            <div className=" ">
              <div className="text-5xl">
                <AiOutlineSafetyCertificate />
              </div>
              <h1 className="font-bold text-xl pt-6">All your data are safe</h1>
              <p className="text-gray-400">We are using the most advanced security to provide you the best experience ever.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-12">
      <Footer/>
      </div>
    </div>
  )
}
export default Page