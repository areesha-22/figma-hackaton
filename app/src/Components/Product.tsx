import React from 'react'
import InfoCard from "../Components/InfoCard"
const Product = () => {
  return (
    <div className='pt-10'>
      <div className='text-gray-400 font-semibold text-base p-9 relative bottom-48 '>Popular Car</div>
 <div className='md:flex'>
 <InfoCard heading="Koenigsegg" sub="sport" price="$99.00/day" icons='' ImageUrl='/car1.svg'/>
      <InfoCard heading="NissanGT-R" sub="sport" price="$80.00/day" icons="" ImageUrl='/car2.svg'/>
      <InfoCard heading="Rolls-Royce" sub="sport" price="$96.00/day"icons='' ImageUrl='/car3.svg'/></div>
      <div className='md:flex'> <InfoCard heading="NissanGT-R" sub="sport" price="$80.00/day"icons='' ImageUrl='/Car.svg'/>
      <InfoCard heading="All NewRush" sub="sport" price="$72.00/ day"icons='' ImageUrl='/car4.svg'/>
      <InfoCard heading="CR-V" sub="sport" price="$72.00/day"icons='' ImageUrl='/Car5.svg'/></div>
      <div  className='md:flex'><InfoCard heading="All NewTerios" sub="sport" price="$80.00/day"icons='' ImageUrl='/Car6.svg'/>
      <InfoCard heading="CR-V" sub="sport" price="$74.00/day"icons='' ImageUrl='/Car 7.svg'/>
     <InfoCard heading="MG ZXExclusice" sub="sport" price="$80.00/day"icons='' ImageUrl='/car8.svg'/></div>
     <div  className='md:flex'> <InfoCard heading="New MGZS" sub="sport" price="$76.00/day"icons='' ImageUrl='/car9.svg'/>
      <InfoCard heading="MG ZX Excite" sub="sport" price="$80.00/day"icons='' ImageUrl='/car8.svg'/>
      <InfoCard heading="New MG ZS" sub="sport" price="$74.00/day"icons='' ImageUrl='/car9.svg'/></div>
      
      <div className="text-center justify-center mt-11 relative bottom-32">
        <button className="bg-[#3563E9] text-white w-40 h-11 rounded font-semibold text-xs">Show More Car</button>
      </div>
    </div>
  )
}

export default Product
