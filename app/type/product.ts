export interface Product {
       _id:number,
       name:string,
       brand:string,
       pricePerDay:string,
       originalPrice:string,
       seatingCapacity:number,
       transmission:string,
       type:string,
       fuelCapacity:string
       tags:string[]
       image?:{
           assest:{
               _ref:string;
               _type:"image"
            }}
            slug:{
                _type:"slug"
                current:string
            }


            
}