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
    <div>
    <div  className='flex' >
   
   
    <div className='space-y-6 p-12'>
      <h2 className='text-gray-400'>Car Types</h2>
      <ul>
        <li>
          <input
            type='checkbox'
            checked={selectedTypes.includes('Sport')}
            onChange={() => handleTypeChange('Sport')}
          />
          Sport (10)
        </li>
        <li>
          <input
            type='checkbox'
            checked={selectedTypes.includes('SUV')}
            onChange={() => handleTypeChange('SUV')}
          />
          SUV (12)
        </li>
        <li>
          <input
            type='checkbox'
            checked={selectedTypes.includes('MPV')}
            onChange={() => handleTypeChange('MPV')}
          />
          MPV (16)
        </li>
        <li>
          <input
            type='checkbox'
            checked={selectedTypes.includes('Sedan')}
            onChange={() => handleTypeChange('Sedan')}
          />
          Sedan (20)
        </li>
        <li>
          <input
            type='checkbox'
            checked={selectedTypes.includes('Coupe')}
            onChange={() => handleTypeChange('Coupe')}
          />
          Coupe (14)
        </li>
        <li>
          <input
            type='checkbox'
            checked={selectedTypes.includes('Hatchback')}
            onChange={() => handleTypeChange('Hatchback')}
          />
          Hatchback (14)
        </li>
      </ul>
      <p>Selected Types: {selectedTypes.join('&apos; ')}</p>
      <h2 className='text-gray-400'>Capacity</h2>
      <ul>
        <li>
          <input
            type='checkbox'
            checked={selectedTypes.includes('Sport')}
            onChange={() => handleTypeChange('Sport')}
          />
          2 Person(10)
        </li>
        <li>
          <input
            type='checkbox'
            checked={selectedTypes.includes('SUV')}
            onChange={() => handleTypeChange('SUV')}
          />
          4 Person (12)
        </li>
        <li>
          <input
            type='checkbox'
            checked={selectedTypes.includes('MPV')}
            onChange={() => handleTypeChange('MPV')}
          />
          6 Person(16)
        </li>
        <li>
          <input
            type='checkbox'
            checked={selectedTypes.includes('Sedan')}
            onChange={() => handleTypeChange('Sedan')}
          />
          8 or More Person (20)
        </li>
        
      </ul>
      <p>Selected Types {selectedTypes.join('&apos; ')}</p>
      <h2 className='text-gray-500'>Price</h2>
      <input type='range' min='10' max='20' className='w-48 text-blue-600'></input>
    </div>
    
    
    <div>
    <div className='pt-12 relative right-14'>
        
    <Image  src='/bg2.jpeg'  width={420} height={550} alt='BG-IMAGE'  ></Image></div>
<div className='relative bottom-64 p-5 right-8'>
<h1 className='font-semibold text-3xl text-white '>Sports car with the best<br></br> design and acceleration</h1>
<p className='text-white pt-3'>Safety and comfort while driving a<br></br> 
futuristic and elegant sports car</p>
<div className='pt-4 '>
    <Image alt='car image' src={'/car2.svg'} width={280} height={100}></Image></div>
<div className='flex gap-5 pt-7 relative right-16'><Image alt='veiw1' src={'/View1.svg'}width={132} height={108}>
    </Image>
    <Image alt='veiw1' src={'/View2.svg'}width={132} height={108}>
    </Image>
    <Image alt='veiw1' src={'/View3.svg'}width={132} height={108}>
    </Image>
    
</div>
<div className='relative left-96 bottom-96'>
<div>
        <h1 className='font-bold text-2xl flex pt-12 gap-20 '>Nissan GT-R<span className='text-red-700'><FaHeart /> </span></h1>
    </div>
    
    <div className='flex relative top-3 '>  <CiStar  className='hover:text-yellow-600 '/><CiStar className='hover:text-yellow-600 ' /><CiStar className='hover:text-yellow-600 ' /><CiStar className='hover:text-yellow-600 ' /><CiStar className='hover:bg-yellow-600 ' />440+ Reviewer </div>
   <p className='font-normal text-base text-gray-500 pt-6'>NISMO has become the embodiment of Nissans <br></br>outstanding performance&apos; inspired by the most<br></br> unforgiving proving ground&apos; the race track.</p>
   <div className='grid grid-row-[100px_100px_100px] grid-cols-[100px_100px_100px_100px] pt-8 '>
<div>Type car</div>
<div>Sports</div>
<div>Capacity</div>
<div>2 Person</div>
<div>Steering</div>
<div>Manual</div>
<div>Gasonline</div>
<div>70L</div>
   </div>
   <div className='flex gap-14 pt-10'>
   <div className='font-bold text-2xl'>$80.00/ <span className='text-gray-500'>days</span></div>
   <button className='text-white w-36 h-14 rounded bg-[#3563E9]'>Rent Now</button>
    </div></div></div>
   
    
    </div>
   
    </div>
    <div className='relative bottom-72 '>
        <h1 className='font-semibold text-xl pb-4'>REVIEWS</h1>
        <div className='flex '>
            
        <Image src={'/Profile1.svg'} alt='image' width={56} height={56} ></Image>
        
    <h2 className='font-bold text-xl'>Alex Stanton <br></br><span className='text-gray-400 text-sm'>CEO at Bukalapak </span></h2>
<div className='flex  gap-11'>
    <p className='text-gray-500 font-normal text-sm relative top-20 right-32'>We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with <br></br> good and comfortable facilities. In addition&apos; the service provided by the officers is also very friendly and very polite.</p>
    
    <div className='flex  '> <CiStar  className='hover:text-yellow-600 '/><CiStar className='hover:text-yellow-600 ' /><CiStar className='hover:text-yellow-600 ' /><CiStar className='hover:text-yellow-600 ' /><CiStar className='hover:bg-yellow-600 ' /> </div>
        </div></div>
        <div className='flex pt-24 '>
            
            <Image src={'/Profile2.svg'} alt='image' width={56} height={56} ></Image>
            
        <h2 className='font-bold text-xl'>Alex Stanton <br></br><span className='text-gray-400 text-sm'>CEO at Bukalapak </span></h2>
    <div className='flex  gap-11'>
        <p className='text-gray-500 font-normal text-sm relative top-20 right-32'>We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with <br></br> good and comfortable facilities. In addition&apos; the service provided by the officers is also very friendly and very polite.</p>
        
        <div className='flex  '> <CiStar  className='hover:text-yellow-600 '/><CiStar className='hover:text-yellow-600 ' /><CiStar className='hover:text-yellow-600 ' /><CiStar className='hover:text-yellow-600 ' /><CiStar className='hover:bg-yellow-600 ' /> </div>
            </div></div>
            
            <div className='pt-96'><Product/></div>
            <Footer/>
    </div>
    
    </div>
   );
   };

    export default Rent