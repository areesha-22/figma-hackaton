"use client"
import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { VscSettings } from "react-icons/vsc";
import { FaHeart,  FaBell, } from "react-icons/fa";

import { UserButton } from '@clerk/nextjs';

const Nav = () => {
    // State to hold the search term
    const [searchTerm, setSearchTerm] = useState('');
    
    // Sample array of car names (you can replace this with your data)
    const carNames = ['Tesla Model S', 'Ford Mustang', 'Chevrolet Camaro', 'Honda Accord', 'Toyota Corolla', 'BMW 3 Series'];

    // Filter car names based on the search term
    const filteredCars = carNames.filter(car => 
        car.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div className="max-w-7xl flex justify-between px-9 border-gray-300 md:px-16 lg:px-20">
                <h1 className="font-bold text-2xl text-[#3563E9] mt-7 md:text-4xl lg:text-3xl">MORENT</h1>
                <div className="md:flex gap-8 hidden lg:w-1/2">
                    <span className="text-gray-400 text-base mt-7 md:text-lg lg:text-xl">
                        <CiSearch />
                    </span>
                    <input 
                        placeholder='Search something here' 
                        className='font-medium text-sm rounded-full md:w-80 lg:w-96' 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <span className="text-gray-400 text-2xl flex pt-8 md:gap-4 lg:gap-6">
                    <FaHeart />
                    <FaBell />
                    < VscSettings/>
                    <UserButton />
                </span>
            </div>
            {/* Display filtered car names */}
            {searchTerm && (
                <div className="max-w-7xl px-9 md:px-16 lg:px-20">
                    <ul className="mt-4">
                        {filteredCars.length > 0 ? (
                            filteredCars.map((car, index) => (
                                <li key={index} className="text-gray-700">{car}</li>
                            ))
                        ) : (
                            <li className="text-gray-400">No cars found</li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Nav;