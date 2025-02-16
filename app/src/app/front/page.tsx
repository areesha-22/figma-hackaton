"use client"

import React, { useEffect, useState } from "react"
import { client } from "@/sanity/lib/client";
import Image from "next/image"
import Link from "next/link"
import { Product } from "../../../type/product";
import { allProducts, three } from "@/lib/queiry";
import { urlFor } from "@/sanity/lib/image";

  export default function CarsComponent() {
    const [product, setProducts] = useState<Product[]>([]);
 useEffect (()=>{
  async function fetchproduct(){
    const fetchedProduct:Product[] = await client.fetch(allProducts) 
  setProducts(fetchedProduct)
  
  }
  fetchproduct()
 })

    return(
        <div className="max-w-6xl mx-antu px-4 py-8">
          <h1 className="text-2xl font-bold  text-center">LATEST CARS</h1>
          <h3 className="text-center font-serif">Best Choice</h3>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-11 content-center justify-center text-center " >
             
       
         {product.map((product)=>(
       
<Link
            href={`/dynamic/${product.slug?.current}`}
            key={product._id}
            passHref
          >
           
          
            {product.name}
            {product.image && (
              <Image src={urlFor(product.image).url()}
              alt="image" height={300}
              width={300} className="w-full h-70 object-cover rounded-md"/> )}

<h2 className="text-lg font-semibold mt-4">{product.brand}</h2>
<p className="text-gray-500 mt-2">{product.pricePerDay?`${product.pricePerDay}`:"price not availabel"}</p>

</Link>
         ))} 
            
</div>        </div>
    )

 }


    
  