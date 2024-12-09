
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";





 
 const PickUp = () => {
  

  return (
    <div>
        <div  className='flex'>
    <div className='relative bottom-56 '>
          <h2 className='text-lg-'>Pick-Up</h2>
      <div className='flex'>
      
        <div className='flex'>
        <label  className='font-bold text-lg'>Location:</label><br></br>
        <select className="relative top-6 right-16">
          <option >Select your city</option>
        
        </select>
      </div>
      <div>
      <h1 className='font-semibold text-base pt-5'>Date</h1>
      <div> <input id="birthdate" type="date"></input></div>
</div>
      <div>
      <h1 className='font-semibold text-base pt-5'>Time</h1>
      <input id="appoint" type="time"></input>
      </div>
     <button className="bg-[#3563E9] w-14 h-14 text-white flex text-center justify-center content-center rounded-lg relative left-14 ">
     <div className="flex relative top-4">< FaArrowUpLong/>
     <FaArrowDownLong /></div>
     </button></div>
    </div>
    <div className='relative bottom-56 left-20'>
          <h2 className='text-lg-'>DROP-Up</h2>
      <div className='flex'>
      
        <div className='flex'>
        <label className='font-bold text-lg'>Location:</label><br></br>
        <select className="relative top-6 right-16">
          <option>Select your city</option>
        
        </select>
      </div>
      <div>
      <h1 className='font-semibold text-base pt-5'>Date</h1>
      <div> <input id="birthdate" type="date"></input></div>
      </div>
      <div>
      <h1 className='font-semibold text-base pt-5'>Time</h1>
      <input id="appoint" type="time"></input>
      </div>
     
    </div></div></div></div>
  );
};

export default PickUp;