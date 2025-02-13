import { client } from "@/sanity/lib/client";
import { Product } from "../../../../type/product";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { MdLocalGasStation } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import Footer from "@/Components/Footer";
interface ProductPageProps{
    params:Promise<{slug:string}>
}
async function getProduct (slug:string):Promise<Product>{
return client.fetch(
    groq `*[_type == "car" && slug.current == $slug ][0]{
        _id,
        name,
        pricePerDay,
         image ,
         seatingCapacity,
         type, 
         fuelCapacity,
         transmission
    }`,{slug}

)}

export default async function ProductPage({params}:ProductPageProps)
{
 const {slug}=await params;
 const product =await getProduct(slug)
 return(

<div>
<div className="max-w-7xl mx-auto px-6 py-10 m-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section - Image */}
          <div className="w-full flex justify-center">
            {product.image && (
              <Image
                src={urlFor(product.image).url()}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-auto max-h-[500px] object-contain rounded-lg shadow-md"
              />
            ) }
          </div>

          {/* Right Section - Details */}
            <div className="flex flex-col justify-center gap-6">
            <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
            <div className="font-semibold  ml-80 "><button className="w-24 h-11 bg-blue-500 rounded">{product.transmission}</button></div>
            <button className="w-24 h-11 bg-blue-500 rounded font-semibold  ml-80">{product.type}</button>
            <div className="text-2xl font-semibold text-black relative bottom-28  ">
            <p>{product.pricePerDay}</p>
             <p className="flex gap-5">{product.seatingCapacity}<FaUserFriends /></p>
           
             <p className="flex gap-5">  {product.fuelCapacity} <MdLocalGasStation /></p>
             
            </div>

</div>
</div></div>
<Footer/></div>




 )
}