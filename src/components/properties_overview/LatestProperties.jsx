import React from 'react'
import l1 from "../../assets/images/properties/l1.svg"
import l2 from "../../assets/images/properties/l2.svg"
import l3 from "../../assets/images/properties/l3.svg"

function LatestProperties() {

    const properties = [{
        img: l1,
        name: "Entire home in Ilha",
        price: "₹ 70 Lac"
    },{
        img: l2,
        name: "Entire home in Ilha",
        price: "₹ 70 Lac"
    },{
        img: l3,
        name: "Entire home in Ilha",
        price: "₹ 70 Lac"
    }
    ]
  return (
    <div>
        <div className='shadow-md px-6 py-4 rounded-2xl bg-white max-w-sm'>
            <p className=' text-2xl font-semibold my-4'>Latest Properties</p>
            {
                properties.map((property) => {
                    return (
                        <div className='flex'>
                            <div className='my-2'>
                                <img src={property.img} alt={property.name} className='w-10/12 2xl:w-full'/>
                            </div>
                            <div className='p-2 2xl:p-4'>
                                <p className='text-xl font-semibold'>{property.name}</p>
                                <p className='text-xl'>{property.price}</p>
                            </div>
                        </div>
                    )
                })
            }
            <p className='text-right text-xl font-medium hover:cursor-pointer hover:underline'>Explore More</p>
        </div>
    </div>
  )
}

export default LatestProperties