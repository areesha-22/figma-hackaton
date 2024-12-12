"use client"

import Time from "@/Components/Time";
import Product from "@/Components/Product";
import Footer from "@/Components/Footer";
import { useState } from "react";

const CarTypes = () => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const handleTypeChange = (type: string) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((t) => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  return (
    <div className=" md:p-8 lg:p-12">
      <div className="flex flex-col md:flex-row lg:flex-row">
        {/* Sidebar */}
        <div className=" md:p-6 lg:p-8 bg-gray-100 rounded-lg shadow w-full md:w-1/4 lg:w-1/5 xl:w-1/6">
          <div>
            <h2 className="text-gray-400 font-semibold mb-2">Car Types</h2>
            <ul className="space-y-2">
              {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map((type, index) => (
                <li key={index} className="flex items-center gap-2">
                  <input type="checkbox" checked={selectedTypes.includes(type)} onChange={() => handleTypeChange(type)} />
                  {type} ({Math.floor(Math.random() * 20) + 10})
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 mt-4">Selected Types: {selectedTypes.join(", ")}</p>
          </div>
          <div>
            <h2 className="text-gray-400 font-semibold mb-2">Capacity</h2>
            <ul className="space-y-2">
              {[{ label: "2 Person", value: "Sport" }, { label: "4 Person", value: "SUV" }, { label: "6 Person", value: "MPV" }, { label: "8 or More Person", value: "Sedan" },].map((capacity, index) => (
                <li key={index} className="flex items-center gap-2">
                  <input type="checkbox" checked={selectedTypes.includes(capacity.value)} onChange={() => handleTypeChange(capacity.value)} />
                  {capacity.label} ({Math.floor(Math.random() * 20) + 10})
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 mt-4">Selected Types: {selectedTypes.join(", ")}</p>
          </div>
          <div>
            <h2 className="text-gray-500 font-semibold mb-2">Price</h2>
            <input type="range" min="10" max="20" className="w-full text-blue-600" />
          </div>
        </div>
        {/* Main Content */}
        <div className="w-full md:w-3/4 lg:w-4/5 xl:w-5/6 space-y-8">
          <div className="relative top-40">
            <Time />
          </div>
          <div className="pt-16">
            <Product />
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="mt-8">
       <Footer/>
      </div>
    </div>
  );
};

export default CarTypes;