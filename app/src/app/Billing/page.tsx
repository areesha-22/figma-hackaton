"use client";

import React, { useState, useEffect } from "react";
import { FaPaypal, FaBitcoin } from "react-icons/fa6";
import { MdOutlineCircle } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/Components/Footer";

const Page = () => {
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");
  const [dropoffTime, setDropoffTime] = useState("");
  const [subtotal, setSubtotal] = useState(80); // Default price
  const [discount, setDiscount] = useState(0);
  const [promoCode, setPromoCode] = useState("");
  const [totalPrice, setTotalPrice] = useState(80);

  // Auto-set the current date & time
  useEffect(() => {
    const now = new Date();
    const formattedDate = now.toISOString().split("T")[0];
    const formattedTime = now.toTimeString().slice(0, 5);

    setPickupDate(formattedDate);
    setPickupTime(formattedTime);
    setDropoffDate(formattedDate);
    setDropoffTime(formattedTime);
  }, []);

  // Calculate rental price based on time difference
  useEffect(() => {
    if (pickupDate && dropoffDate) {
      const start = new Date(`${pickupDate}T${pickupTime}`);
      const end = new Date(`${dropoffDate}T${dropoffTime}`);
      const hours = Math.max((end - start) / 36e5, 1); // Ensure minimum 1 hour
      const calculatedSubtotal = hours * 10; // $10 per hour

      setSubtotal(calculatedSubtotal);
      setTotalPrice(calculatedSubtotal - discount);
    }
  }, [pickupDate, pickupTime, dropoffDate, dropoffTime, discount]);

  // Apply promo code discount
  const applyPromoCode = () => {
    let promoDiscount = 0;
    if (promoCode === "SAVE10") {
      promoDiscount = 10;
    } else if (promoCode === "DISCOUNT20") {
      promoDiscount = 20;
    } else {
      alert("Invalid promo code!");
      return;
    }
    setDiscount(promoDiscount);
    setTotalPrice(subtotal - promoDiscount);
  };

  return (
    <div className="container mx-auto p-6 lg:p-12">
      <div className="flex flex-wrap justify-center">
        {/* Billing Info */}
        <div className="w-full lg:w-1/2 xl:w-1/3 p-6 text-center">
          <h1 className="font-bold text-xl">Billing Info</h1>
          <p className="text-gray-400">Please enter your billing info</p>
          <div className="flex pt-6">
            <div className="w-1/2 p-2">
              <h1 className="font-semibold">Name</h1>
              <input type="text" placeholder="Your Name" className="w-full p-2 border rounded-lg" />
            </div>
            <div className="w-1/2 p-2">
              <h1 className="font-semibold">Phone Number</h1>
              <input type="tel" placeholder="Phone Number" className="w-full p-2 border rounded-lg" />
            </div>
          </div>
        </div>

        {/* Rental Summary */}
        <div className="w-full lg:w-1/2 xl:w-1/3 p-6 text-center">
          <h1 className="font-bold text-xl">Rental Summary</h1>
          <p className="text-gray-400">Price updates dynamically based on rental duration.</p>
          <Image alt="car" src="/View1.svg" width={132} height={108} className="mx-auto mt-4" />
          <h1 className="font-bold text-2xl">Nissan GT-R</h1>
        </div>
      </div>

      {/* Rental Info */}
      <div className="w-full lg:w-2/3 p-6 mx-auto">
        <h1 className="font-bold text-xl text-center">Rental Info</h1>
        <p className="text-gray-400 text-center">Please select your rental date</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Pick-Up */}
          <div>
            <h2 className="font-bold text-lg">Pick-Up</h2>
            <input type="date" className="w-full p-2 border rounded mt-2" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} />
            <input type="time" className="w-full p-2 border rounded mt-2" value={pickupTime} onChange={(e) => setPickupTime(e.target.value)} />
          </div>
          {/* Drop-Off */}
          <div>
            <h2 className="font-bold text-lg">Drop-Off</h2>
            <input type="date" className="w-full p-2 border rounded mt-2" value={dropoffDate} onChange={(e) => setDropoffDate(e.target.value)} />
            <input type="time" className="w-full p-2 border rounded mt-2" value={dropoffTime} onChange={(e) => setDropoffTime(e.target.value)} />
          </div>
        </div>
      </div>

      {/* Payment Details */}
      <div className="w-full lg:w-2/3 p-6 mx-auto">
        <h1 className="font-bold text-xl text-center">Payment Method</h1>
        <p className="text-gray-400 text-center">Choose your preferred payment method.</p>
        <div className="flex justify-between mt-6">
          <span className="flex items-center gap-2">
            <MdOutlineCircle /> PayPal <FaPaypal className="text-[#167FC4] text-2xl" />
          </span>
          <span className="flex items-center gap-2">
            <MdOutlineCircle /> Bitcoin <FaBitcoin className="text-yellow-600 text-2xl" />
          </span>
        </div>
      </div>

      {/* Price Calculation */}
      <div className="w-full lg:w-2/3 p-6 mx-auto">
        <h1 className="font-bold text-xl text-center">Total Payment</h1>
        <div className="flex justify-between mt-4">
          <span>Subtotal:</span> <span className="font-bold">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mt-2">
          <span>Discount:</span> <span className="font-bold text-green-500">-${discount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mt-2 text-lg font-bold">
          <span>Total Price:</span> <span>${totalPrice.toFixed(2)}</span>
        </div>

        {/* Promo Code */}
        <div className="flex mt-4">
          <input type="text" placeholder="Apply promo code" className="w-3/4 p-2 border rounded-l" value={promoCode} onChange={(e) => setPromoCode(e.target.value)} />
          <button onClick={applyPromoCode} className="w-1/4 p-2 bg-blue-600 text-white rounded-r">Apply</button>
        </div>
      </div>

      {/* Confirm Button */}
      <div className="text-center mt-6">
        <Link href="/Detail">
          <button className="w-36 h-14 bg-[#3563E9] font-bold text-white rounded-xl">Rent Now</button>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
