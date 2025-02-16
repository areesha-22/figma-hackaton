import React from "react";
import InfoCard from "../Components/InfoCard";
import Link from "next/link";

const Product = () => {
  return (
    <div className="pt-10 px-4">
      <div className="text-gray-400 font-semibold text-base p-9 text-center md:text-left">
        Popular Car
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
        <InfoCard heading="Koenigsegg" sub="Sport" price="$99.00/day" ImageUrl="/car1.svg" icons=""/>
        <InfoCard heading="Nissan GT-R" sub="Sport" price="$80.00/day" ImageUrl="/car2.svg" icons="" />
        <InfoCard heading="Rolls-Royce" sub="Sport" price="$96.00/day" ImageUrl="/car3.svg"  icons=""/>
        <InfoCard heading="Nissan GT-R" sub="Sport" price="$80.00/day" ImageUrl="/Car.svg"icons="" />
        <InfoCard heading="All New Rush" sub="Sport" price="$72.00/day" ImageUrl="/car4.svg"icons="" />
        <InfoCard heading="CR-V" sub="Sport" price="$72.00/day" ImageUrl="/Car5.svg" icons=""/>
        <InfoCard heading="All New Terios" sub="Sport" price="$80.00/day" ImageUrl="/Car6.svg" icons=""/>
        <InfoCard heading="CR-V" sub="Sport" price="$74.00/day" ImageUrl="/Car7.svg"icons="" />
        <InfoCard heading="MG ZX Exclusive" sub="Sport" price="$80.00/day" ImageUrl="/car8.svg" icons=""/>
        <InfoCard heading="New MG ZS" sub="Sport" price="$76.00/day" ImageUrl="/car9.svg"icons="" />
        <InfoCard heading="MG ZX Excite" sub="Sport" price="$80.00/day" ImageUrl="/car8.svg"icons="" />
        <InfoCard heading="New MG ZS" sub="Sport" price="$74.00/day" ImageUrl="/car9.svg"icons="" />
      </div>

      {/* Show More Button */}
      <div className="flex justify-center mt-10">
        <Link href="/front">
          <button className="bg-[#3563E9] text-white w-40 h-11 rounded font-semibold text-xs hover:bg-[#2748b0] transition">
            Show More Cars
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
