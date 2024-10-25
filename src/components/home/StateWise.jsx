import React from 'react'
import img1 from "../../assets/images/Discover/img1.png"
import img2 from "../../assets/images/Discover/img2.png"
import img3 from "../../assets/images/Discover/img3.png"
import img4 from "../../assets/images/Discover/img4.png"
import { IoMdHeart } from "react-icons/io";



function StateWise() {

    const properties = [
        {
          id: 1,
          img:img1,
          name: "Liaes Spanish Rishikesh",
          views: "4,561",
          dateRange: "15 - 20 Dec",
          price: "₹63,570",
          tag: "Most Trending",
        },
        {
          id: 2,
          img:img2,
          name: "Liaes Spanish Rishikesh",
          views: "4,561",
          dateRange: "15 - 20 Dec",
          price: "₹63,570",
          tag: "Most Trending",
        },
        {
          id: 3,
          img:img3,
          name: "Liaes Spanish Rishikesh",
          views: "4,561",
          dateRange: "15 - 20 Dec",
          price: "₹63,570",
          tag: "Most Trending",
        },
        {
          id: 4,
          img:img4,
          name: "Liaes Spanish Rishikesh",
          views: "4,561",
          dateRange: "15 - 20 Dec",
          price: "₹63,570",
          tag: "Most Trending",
        },
      ];

  return (
    <>
    {/* StateWise */}
 
    {/* <p className='container mx-auto text-[41px] font-semibold'>Top Destinations in Uttarakhand</p> */}
    <div className="container mx-auto py-2 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-10/12 2xl:w-full mx-auto">
        {properties.map((property) => (
          <div key={property.id} className=" rounded-lg overflow-hidden relative">
            <img
              className="w-full h-9/12 rounded-3xl object-cover"
              src={property.img}
              alt={property.name}
            />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="bg-[#0A784714] text-[#0A7847] px-3 p-2 rounded-full text-xs font-semibold">
                  {property.tag}
                </span>
                <button className="text-gray-400  transition absolute top-6 right-4 hover:scale-95">
                    <IoMdHeart className='text-3xl hover:text-red-500 text-white hover:text'/>
                </button>
                <p className='bg-white rounded-full cursor-default absolute left-4 top-4 px-4 py-2'>Most Favourite</p>
              </div>
              <h3 className="text-lg font-semibold">{property.name}</h3>
              <p className="text-sm text-gray-500">Viewed {property.views} times last week</p>
              <p className="text-sm text-gray-500">{property.dateRange}</p>
              <p className="text-lg font-semibold mt-2">{property.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default StateWise