
"use client"
import Time from "@/Components/Time";
import Product from '@/Components/Product';
import Footer from "@/Components/Footer";
import { useState } from 'react';


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
    <div>
    <div className="flex">
    <div className='space-y-6 p-12'>
      <h2 className='text-gray-400'>Car Types</h2>
      <ul>
        <li>
          <input
            type="checkbox"
            checked={selectedTypes.includes('Sport')}
            onChange={() => handleTypeChange('Sport')}
          />
          Sport (10)
        </li>
        <li>
          <input
            type="checkbox"
            checked={selectedTypes.includes('SUV')}
            onChange={() => handleTypeChange('SUV')}
          />
          SUV (12)
        </li>
        <li>
          <input
            type="checkbox"
            checked={selectedTypes.includes('MPV')}
            onChange={() => handleTypeChange('MPV')}
          />
          MPV (16)
        </li>
        <li>
          <input
            type="checkbox"
            checked={selectedTypes.includes('Sedan')}
            onChange={() => handleTypeChange('Sedan')}
          />
          Sedan (20)
        </li>
        <li>
          <input
            type="checkbox"
            checked={selectedTypes.includes('Coupe')}
            onChange={() => handleTypeChange('Coupe')}
          />
          Coupe (14)
        </li>
        <li>
          <input
            type="checkbox"
            checked={selectedTypes.includes('Hatchback')}
            onChange={() => handleTypeChange('Hatchback')}
          />
          Hatchback (14)
        </li>
      </ul>
      <p>Selected Types: {selectedTypes.join(', ')}</p>
      <h2 className='text-gray-400'>Capacity</h2>
      <ul>
        <li>
          <input
            type="checkbox"
            checked={selectedTypes.includes('Sport')}
            onChange={() => handleTypeChange('Sport')}
          />
          2 Person(10)
        </li>
        <li>
          <input
            type="checkbox"
            checked={selectedTypes.includes('SUV')}
            onChange={() => handleTypeChange('SUV')}
          />
          4 Person (12)
        </li>
        <li>
          <input
            type="checkbox"
            checked={selectedTypes.includes('MPV')}
            onChange={() => handleTypeChange('MPV')}
          />
          6 Person(16)
        </li>
        <li>
          <input
            type="checkbox"
            checked={selectedTypes.includes('Sedan')}
            onChange={() => handleTypeChange('Sedan')}
          />
          8 or More Person (20)
        </li>
        
      </ul>
      <p>Selected Types: {selectedTypes.join(', ')}</p>
      <h2 className='text-gray-500'>Price</h2>
      <input type="range" min="10" max="20" className='w-48 text-blue-600'></input>
    </div>
    <div>
    <Time/>
    <div className="relative top-16 w-72 right-9">
 <Product/>
 </div>
     
      </div>
     
    </div> <div>
      <Footer/></div></div>
  );
};

export default CarTypes;