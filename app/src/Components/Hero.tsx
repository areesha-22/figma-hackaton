import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-12 lg:px-20 xl:px-32 relative py-10 md:py-16 lg:py-20">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <div className="relative w-full max-w-[500px]">
          <Image
            src="/bg1.jpeg"
            alt="Background Image 1"
            width={553}
            height={450}
            priority
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
        <div className=" absolute p-6 md:p-8 rounded-lg text-white max-w-[85%] md:max-w-[400px]">
          <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight">
            The Best Platform for Car Rental
          </h1>
          <p className="mt-4 text-sm md:text-base">
            Ease of doing a car rental safely and reliably. Of course, at a low price.
          </p>
          <Link href="/Ctype">
            <button className=" bg-[#3563E9] text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 transition">
              Rental Car
            </button>
          </Link>
        </div>
        
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <div className="relative w-full max-w-[500px]">
          <Image
            src="/bg2.jpeg"
            alt="Background Image 2"
            width={553}
            height={450}
            priority
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
        <div className="absolute pb-40   p-6 md:p-8 rounded-lg text-white max-w-[85%] md:max-w-[400px]">
          <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight">
            Easy way to rent a car at a low price
          </h1>
          <p className="mt-4 text-sm md:text-base">
            Providing cheap car rental services with safe and comfortable facilities.
          </p>
          
          <Link href="/Rent">
            <button className=" bg-[#54A6FF] text-white font-semibold px-3 py-3 rounded-lg hover:bg-blue-400 transition">
              Rental Car
            </button>
          </Link>
        </div>
       
      </div>
    </div>
  )
}

export default Hero
