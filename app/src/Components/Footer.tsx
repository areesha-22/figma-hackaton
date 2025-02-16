import React from 'react'

const Footer = () => {
  return (
    <footer className="border-x-4 border-b-2 bg-gray-100">
      {/* Top Section */}
      <div className="flex flex-wrap justify-between items-start px-6 py-12 md:px-12 lg:px-20">
        {/* Brand Info */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h1 className="font-bold text-3xl text-[#3563E9]">MORENT</h1>
          <p className="text-[#13131399] font-medium text-base mt-5">
            Our vision is to provide convenience and help increase your sales business.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Column 1 */}
          <div>
            <h2 className="font-semibold text-xl">About</h2>
            <ul className="text-gray-500 space-y-2 mt-2">
              <li>How it Works</li>
              <li>Feature</li>
              <li>Partnership</li>
              <li>Business Relation</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h2 className="font-semibold text-xl">Community</h2>
            <ul className="text-gray-500 space-y-2 mt-2">
              <li>Event</li>
              <li>Blog</li>
              <li>Podcast</li>
              <li>Invite a Friend</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h2 className="font-semibold text-xl">Social</h2>
            <ul className="text-gray-500 space-y-2 mt-2">
              <li>Discord</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-6 border-t text-gray-600 text-sm md:text-base">
        <p className="w-full md:w-auto text-center md:text-left">
          &copy; 2022 MORENT. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center md:justify-end gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-[#3563E9] transition">Privacy & Policy</a>
          <a href="#" className="hover:text-[#3563E9] transition">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
