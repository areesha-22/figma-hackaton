import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center border-x-4 border-b-2 md:flex-nowrap lg:flex-nowrap">
        <div className="pt-11 p-20 md:p-10 lg:p-20 w-full md:w-1/2 lg:w-1/3">
          <h1 className="font-bold text-3xl text-[#3563E9] pt-16">MORENT</h1>
          <p className="text-[#13131399] font-medium text-base pt-5">Our vision is to provide convenience <br></br>and help increase your sales business.</p>
        </div>
        <div className="grid grid-rows-[50px_50px_50px_50px] grid-cols-[200px_200px_200px] pt-28 w-full md:w-1/2 lg:w-2/3">
          <div className="font-semibold text-xl">About</div>
          <div className="font-semibold text-xl">Community</div>
          <div className="font-semibold text-xl">Social</div>
          <div className="text-gray-500">How it Work</div>
          <div className="text-gray-500">Event</div>
          <div className="text-gray-500">Discord</div>
          <div className="text-gray-500">Feature</div>
          <div className="text-gray-500">Blog</div>
          <div className="text-gray-500">Instagram</div>
          <div className="text-gray-500">Partner ship</div>
          <div className="text-gray-500">PodCast</div>
          <div className="text-gray-500">Twitter</div>
          <div className="text-gray-500">Bussiness Relation</div>
          <div className="text-gray-500">Invite a friend</div>
          <div className="text-gray-500">Facebook</div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-8 mt-28 mb-14 p-16 md:p-10 lg:p-16">
        <div className="font-semibold text-base w-full md:w-1/2 lg:w-1/3">2022 MORENT. All rights reserved</div>
        <div className="relative left-96 md:left-0 lg:left-0 w-full md:w-1/2 lg:w-1/3">Privacy & Policy</div>
        <div className="relative left-96 md:left-0 lg:left-0 w-full md:w-1/2 lg:w-1/3">Terms & Condition</div>
      </div>
    </div>
  )
}

export default Footer