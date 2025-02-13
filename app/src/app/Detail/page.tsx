"use client";

import React, { useState, useEffect } from "react";
import { FaHome, FaCar, FaWallet } from "react-icons/fa";

import { RiSettingsFill } from "react-icons/ri";
import { CiCircleInfo } from "react-icons/ci";
import { MdShoppingBag, MdOutlineWbSunny } from "react-icons/md";
import Footer from "@/Components/Footer";
import Link from "next/link";

const Page = () => {
  const [location, setLocation] = useState("Select a location");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");
  const [dropoffTime, setDropoffTime] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [distance, setDistance] = useState(0);
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  const [selectedCoords, setSelectedCoords] = useState({ lat: null, lng: null });

  // Load Google Maps
  useEffect(() => {
    const loadGoogleMaps = async () => {
      if (!window.google) {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initMap
        `;
        script.async = true;
        script.onload = initMap;
        document.body.appendChild(script);
      } else {
        initMap();
      }
    };

    loadGoogleMaps();
  }, []);

  // Initialize Google Map
  const initMap = () => {
    const defaultCoords = { lat: 25.276987, lng: 55.296249 }; // Default to Dubai
    const mapInstance = new window.google.maps.Map(document.getElementById("map"), {
      center: defaultCoords,
      zoom: 12,
    });

    const markerInstance = new window.google.maps.Marker({
      position: defaultCoords,
      map: mapInstance,
      draggable: true,
    });

    setMap(mapInstance);
    setMarker(markerInstance);

    markerInstance.addListener("dragend", () => {
      const position = markerInstance.getPosition();
      setSelectedCoords({ lat: position.lat(), lng: position.lng() });
      fetchLocation(position.lat(), position.lng());
    });
  };

  // Fetch location name from coordinates
  const fetchLocation = async (lat, lng) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
      );
      const data = await response.json();
      setLocation(data.display_name || "Selected location");
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  };

  // Auto-fill Date & Time
  useEffect(() => {
    const now = new Date();
    const formattedDate = now.toISOString().split("T")[0];
    const formattedTime = now.toTimeString().split(" ")[0].slice(0, 5);
    setPickupDate(formattedDate);
    setPickupTime(formattedTime);
    setDropoffDate(formattedDate);
    setDropoffTime(formattedTime);
  }, []);

  // Calculate Rental Price
  useEffect(() => {
    if (pickupDate && dropoffDate) {
      const start = new Date(`${pickupDate}T${pickupTime}`);
      const end = new Date(`${dropoffDate}T${dropoffTime}`);
      const diffHours = Math.max((end - start) / 36e5, 1); // Minimum 1 hour
      const price = distance * 0.5 + diffHours * 10; // $0.5/km + $10/hour
      setTotalPrice(price);
    }
  }, [pickupDate, pickupTime, dropoffDate, dropoffTime, distance]);

  return (
    <div className="p-4 sm:p-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 bg-gray-100 p-4 rounded-lg shadow">
          <ul className="space-y-4">
            <Link href="/"><li className="flex items-center gap-4 hover:text-[#3563E9] text-gray-500"><FaHome /> Dashboard</li></Link>
            <Link href="/Ctype"><li className="flex items-center gap-4 hover:text-[#3563E9] text-gray-500"><FaCar /> Car Rent</li></Link>
            <Link href="/Billing"><li className="flex items-center gap-4 hover:text-[#3563E9] text-gray-500"><FaWallet /> Billing</li></Link>
          </ul>
          <div className="text-gray-500 font-semibold text-xs pt-12">P R E F E R E N C E S</div>
          <ul className="space-y-4 mt-4">
            <li className="flex items-center gap-4 hover:text-[#3563E9] text-gray-500"><RiSettingsFill /> Settings</li>
            <li className="flex items-center gap-4 hover:text-[#3563E9] text-gray-500"><CiCircleInfo /> Help & Center</li>
           
          </ul>
          <div className="text-gray-500 font-semibold text-xl mt-12">Log Out</div>
        

        </div>

        {/* Main Content */}
        <div className="w-full md:w-3/4 space-y-8">
          {/* Rental Details */}
          <div>
            <h1 className="font-bold text-2xl">Details Rental</h1>
            <div className="mt-4">
              <label className="font-bold text-lg">Selected Location:</label>
              <p className="text-gray-500 mt-2">{location}</p>
            </div>
          </div>

          {/* Google Map */}
          <div className="w-full h-64 md:h-80 rounded-lg mt-4" id="map"></div>

          {/* Pick-Up and Drop-Off */}
          <div className="space-y-8">
            <div>
              <h2 className="text-lg font-bold">Pick-Up</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div>
                  <label className="font-bold text-lg block">Date:</label>
                  <input type="date" className="w-full border p-2 rounded mt-2" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} />
                </div>
                <div>
                  <label className="font-semibold text-base block">Time:</label>
                  <input type="time" className="w-full border p-2 rounded mt-2" value={pickupTime} onChange={(e) => setPickupTime(e.target.value)} />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-bold">Drop-Off</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div>
                  <label className="font-bold text-lg block">Date:</label>
                  <input type="date" className="w-full border p-2 rounded mt-2" value={dropoffDate} onChange={(e) => setDropoffDate(e.target.value)} />
                </div>
                <div>
                  <label className="font-semibold text-base block">Time:</label>
                  <input type="time" className="w-full border p-2 rounded mt-2" value={dropoffTime} onChange={(e) => setDropoffTime(e.target.value)} />
                </div>
              </div>
            </div>
          </div>

          {/* Total Rental Price */}
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-xl">Total Rental Price</h2>
            <div className="font-bold text-3xl">${totalPrice.toFixed(2)}</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
