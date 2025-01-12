'use client'
import { useState } from 'react'
import Image from 'next/image'
import { FaHeart } from 'react-icons/fa'
import { CiStar } from 'react-icons/ci'
import Product from '@/Components/Product'
import Footer from '@/Components/Footer'

const Rent = () => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])

  const handleTypeChange = (type: string) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((t) => t !== type))
    } else {
      setSelectedTypes([...selectedTypes, type])
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Main Flex Container */}
      <div className="lg:flex">
        {/* Sidebar Section */}
        <div className="space-y-6 p-6 lg:w-1/4">
          <h2 className="text-gray-400 text-lg font-medium">Car Types</h2>
          <ul className="space-y-2">
            {['Sport', 'SUV', 'MPV', 'Sedan', 'Coupe', 'Hatchback'].map((type, idx) => (
              <li key={idx}>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedTypes.includes(type)}
                    onChange={() => handleTypeChange(type)}
                  />
                  {type} ({idx * 10 + 10})
                </label>
              </li>
            ))}
          </ul>

          <h2 className="text-gray-400 text-lg font-medium">Capacity</h2>
          <ul className="space-y-2">
            {['2 Person', '4 Person', '6 Person', '8 or More Person'].map((capacity, idx) => (
              <li key={idx}>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedTypes.includes(capacity)}
                    onChange={() => handleTypeChange(capacity)}
                  />
                  {capacity} ({idx * 5 + 10})
                </label>
              </li>
            ))}
          </ul>

          <h2 className="text-gray-500 text-lg font-medium">Price</h2>
          <input type="range" min="10" max="20" className="w-full" />
        </div>

        {/* Main Content Section */}
        <div className="lg:w-3/4">
          {/* Car Image Section */}
          <div className="relative">
            <Image src="/bg2.jpeg" width={120} height={150} alt="BG-IMAGE" className="w-full object-cover" />
            <div className="absolute top-10 left-10 text-white">
              <h1 className="font-semibold text-2xl lg:text-3xl">
                Sports car with the best <br /> design and acceleration
              </h1>
              <p className="text-sm lg:text-base mt-2">
                Safety and comfort while driving a <br />
                futuristic and elegant sports car
              </p>
              <Image src="/car2.svg" alt="car image" width={280} height={100} className="mt-4" />
            </div>
            <div className='flex gap-5 pt-7 '><Image alt='veiw1' src={'/View1.svg'}width={132} height={108}>
    </Image>
    <Image alt='veiw1' src={'/View2.svg'}width={132} height={108}>
    </Image>
    <Image alt='veiw1' src={'/View3.svg'}width={132} height={108}>
    </Image>
    
    </div>

          </div>

          {/* Car Details */}
          <div className="bg-white p-6 shadow-md rounded-md mt-6">
            <div className="flex justify-between items-center">
              <h1 className="font-bold text-xl lg:text-2xl">Nissan GT-R</h1>
              <FaHeart className="text-red-600" />
            </div>
            <div className="flex items-center gap-1 text-yellow-500 mt-2">
              {[...Array(5)].map((_, idx) => (
                <CiStar key={idx} />
              ))}
              <span className="text-gray-500 text-sm">440+ Reviews</span>
            </div>
            <p className="text-gray-500 mt-4">
              NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving
              proving ground—the race track.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <div>
                <h4 className="text-sm font-medium">Type car</h4>
                <p className="text-gray-500 text-sm">Sports</p>
              </div>
              <div>
                <h4 className="text-sm font-medium">Capacity</h4>
                <p className="text-gray-500 text-sm">2 Person</p>
              </div>
              <div>
                <h4 className="text-sm font-medium">Steering</h4>
                <p className="text-gray-500 text-sm">Manual</p>
              </div>
              <div>
                <h4 className="text-sm font-medium">Gasoline</h4>
                <p className="text-gray-500 text-sm">70L</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-6">
              <p className="text-lg font-bold">
                $80.00 / <span className="text-gray-500">day</span>
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Rent Now</button>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="mt-10">
            <h1 className="font-semibold text-xl">REVIEWS</h1>
            {Array(2)
              .fill(null)
              .map((_, idx) => (
                <div key={idx} className="flex gap-4 mt-6">
                  <Image src={`/Profile${idx + 1}.svg`} alt="Profile" width={56} height={56} />
                  <div>
                    <h2 className="font-bold text-lg">Alex Stanton</h2>
                    <p className="text-gray-400 text-sm">CEO at Bukalapak</p>
                    <p className="text-gray-500 text-sm mt-2">
                      We are very happy with the service from the MORENT App. Morent has a low price and also a large
                      variety of cars with good and comfortable facilities.
                    </p>
                    <div className="flex text-yellow-500 mt-2">
                      {[...Array(5)].map((_, idx) => (
                        <CiStar key={idx} />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-28">
        <Product />
        <Footer />
      </div>
    </div>
  )
}

export default Rent
