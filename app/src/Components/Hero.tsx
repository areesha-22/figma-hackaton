import React from 'react'
import Image from 'next/image'
import Link from "next/link"

const Hero = () => {
  return (
    <>
      <div className="md:flex   gap-5 px-4 relative top-10 md:top-10 lg:top-20">
        <div className="w-full ">
          <div>
            <Image src="/bg1.jpeg" width={553} height={450} alt='BG-IMAGE' />
          </div>
          <div className="w-[500px] md:w-[400px] lg:w-[500px] h-[350px] md:h-[300px] lg:h-[350px] rounded-lg relative bottom-64 px-6 md:px-4 lg:px-6">
            <h1 className="font-semibold text-3xl text-white md:text-2xl lg:text-3xl">The Best Platform<br></br> for Car Rental</h1>
            <p className="text-white font-medium text-base pt-5 md:text-sm lg:text-base">Ease of doing a car rental safely and<br></br> reliably. Of course at a low price.</p>
            <Link href={ './Ctype'}>
              <div className="pt-5">
                <button className="bg-[#3563E9]  md:w-28 lg:w-32 h-11 text-white rounded-lg px-5 md:px-4 lg:px-5">Rental Car</button>
              </div>
            </Link>
            <div>
              <Image alt='car' src={"/car1.svg"} width={"350"} height={"100"} className='relative left-32 bottom-12 md:left-20 lg:left-32' />
            </div>
          </div>
        </div>
        <section className="w-full ">
          <div>
            <Image src="/bg2.jpeg" width={553} height={450} alt='BG-IMAGE' />
          </div>
          <div className="w-[500px] md:w-[400px] lg:w-[500px] h-[350px] md:h-[300px] lg:h-[350px] rounded-lg relative bottom-64 px-6 md:px-4 lg:px-6">
            <h1 className="font-semibold text-3xl text-white md:text-2xl lg:text-3xl">Easy way to rent a<br></br> car at a low price</h1>
            <p className="text-white font-medium text-base pt-5 md:text-sm lg:text-base">Providing cheap car rental services<br></br> and safe and comfortable facilities.</p>
            <Link href={ '/Rent'}>
              <div className="pt-5">
                <button className="bg-[#54A6FF]  md:w-28 lg:w-32 lg:h-11 text-white rounded-lg px-5 md:px-4 lg:px-5">Rental Car</button>
              </div>
            </Link>
            <div>
              <Image alt='car' src={"/car2.svg"} width={"310"} height={"100"} className='relative left-32 bottom-12 md:left-20 lg:left-32' />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Hero
