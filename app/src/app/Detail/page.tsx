"use client";

import React, { useState, useEffect } from "react";
import { FaHome, FaCar, FaWallet } from "react-icons/fa";
import { RiSettingsFill } from "react-icons/ri";
import { CiCircleInfo } from "react-icons/ci";
import Footer from "@/Components/Footer";
import Link from "next/link";
// global.d.ts
export {}; // Ensure this is treated as a module

declare global {
  interface Window {
    google: typeof google;
  }
}

const Page = () => {
  const [location, setLocation] = useState("Select a location");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");
  const [dropoffTime, setDropoffTime] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [distance] = useState(0);
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  const [selectedCoords, setSelectedCoords] = useState({ lat: null, lng: null });
  useEffect(() => {
    if (map) {
      console.log("Map initialized:", map);
    }
  }, [map]);
  
  useEffect(() => {
    if (marker) {
      console.log("Marker updated:", marker);
    }
  }, [marker]);
  useEffect(() => {
    if (selectedCoords) {
      console.log("Map initialized:",selectedCoords);
    }
  }, [selectedCoords]);
 
  
  useEffect(() => {
    const loadGoogleMaps = async () => {
      if (window.google?.maps) { // ✅ This avoids TypeScript errors
        initMap();
        return;
      }
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY`;
      script.async = true;
      script.onload = initMap;
      document.body.appendChild(script);
    };
  
    loadGoogleMaps();
  }, []);
  

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

  useEffect(() => {
    const now = new Date();
    const formattedDate = now.toISOString().split("T")[0];
    const formattedTime = now.toTimeString().split(" ")[0].slice(0, 5);
    setPickupDate(formattedDate);
    setPickupTime(formattedTime);
    setDropoffDate(formattedDate);
    setDropoffTime(formattedTime);
  }, []);

  useEffect(() => {
    if (pickupDate && dropoffDate) {
      const start: Date = new Date(pickupDate + "T" + pickupTime);
      const end: Date = new Date(dropoffDate + "T" + dropoffTime);
      
      const hours: number = Math.max((end.getTime() - start.getTime()) / 36e5, 1);
      const price = distance * 0.5 + hours* 10;
      setTotalPrice(price);
    }
  }, [pickupDate, pickupTime, dropoffDate, dropoffTime, distance]);

  return (
    <div className="p-4 sm:p-8">
      <div className="flex flex-col md:flex-row gap-8">
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
          <button className="text-gray-500 font-semibold text-xl mt-12 hover:text-[#3563E9]">
            Log Out
          </button>
        </div>

        <div className="w-full md:w-3/4 space-y-8">
          <h1 className="font-bold text-2xl">Details Rental</h1>
          <p className="text-gray-500 mt-2">{location}</p>
          <div className="w-full h-64 md:h-80 rounded-lg mt-4" id="map"></div>
          <h2 className="font-bold text-xl">Total Rental Price</h2>
          <div className="font-bold text-3xl">${totalPrice.toFixed(2)}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
