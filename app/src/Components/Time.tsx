
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";





 
 const PickUp = () => {
  

  return (
    <div className=" flex relative bottom-5">
    <div>
      <h2 className="text-lg font-bold">Pick-Up</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <div>
          <label className="font-bold text-lg block">Location:</label>
          <select className="w-full border p-2 rounded mt-2">
            <option>Select your city</option>
          </select>
        </div>
        <div>
          <label className="font-semibold text-base block">Date:</label>
          <input type="date" className="w-full border p-2 rounded mt-2" />
        </div>
        <div>
          <label className="font-semibold text-base block">Time:</label>
          <input type="time" className="w-full border p-2 rounded mt-2" />
        </div>
      </div>
    </div>
    <button className="bg-[#3563E9] w-14 h-14 text-white flex text-center justify-center content-center rounded-lg  ">
     <div className="flex relative top-4">< FaArrowUpLong/>
     <FaArrowDownLong /></div>
     </button>
    <div className="pl-10 pb-10">
      <h2 className="text-lg font-bold">Drop-Up</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div>
          <label className="font-bold text-lg block">Location:</label>
          <select className="w-full border p-2 rounded mt-2">
            <option>Select your city</option>
          </select>
        </div>
        <div>
          <label className="font-semibold text-base block">Date:</label>
          <input type="date" className="w-full border p-2 rounded mt-2" />
        </div>
        <div>
          <label className="font-semibold text-base block">Time:</label>
          <input type="time" className="w-full border p-2 rounded mt-2" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default PickUp;

