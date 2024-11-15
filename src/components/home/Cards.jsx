import React from 'react'
import img1 from "../../assets/images/discover/img1.png"
import img2 from "../../assets/images/discover/img2.png"
import img3 from "../../assets/images/discover/img3.png"
import img5 from "../../assets/images/discover/img5.jpg"
import img6 from "../../assets/images/discover/img6.jpg"
import img7 from "../../assets/images/discover/img7.jpg"
import img8 from "../../assets/images/discover/img8.jpg"
import img9 from "../../assets/images/discover/img9.jpg"
import img10 from "../../assets/images/discover/img10.jpg"
import img12 from "../../assets/images/discover/img12.jpg"
import img16 from "../../assets/images/discover/img16.jpg"
import { IoMdHeart } from "react-icons/io";
import Properties from "./Properties.jsx";
import { Link } from "react-router-dom";

function Cards() {
  const properties = [
    {
      id: 1,
      img: img1,
      name: "Liaes Spanish Rishikesh",
      views: "4,561",
      dateRange: "15 - 20 Dec",
      price: "₹63,570",
      tag: "Most Trending",
    },
    {
      id: 2,
      img: img10,
      name: "Liaes Spanish Rishikesh",
      views: "4,561",
      dateRange: "15 - 20 Dec",
      price: "₹63,570",
      tag: "Most Trending",
    },
    {
      id: 3,
      img: img2,
      name: "Liaes Spanish Rishikesh",
      views: "4,561",
      dateRange: "15 - 20 Dec",
      price: "₹63,570",
      tag: "Most Trending",
    },
    {
      id: 4,
      img: img6,
      name: "Liaes Spanish Rishikesh",
      views: "4,561",
      dateRange: "15 - 20 Dec",
      price: "₹63,570",
      tag: "Most Trending",
    },
    {
      id: 5,
      img: img12,
      name: "Liaes Spanish Rishikesh",
      views: "4,561",
      dateRange: "15 - 20 Dec",
      price: "₹63,570",
      tag: "Most Trending",
    },
    {
      id: 6,
      img: img2,
      name: "Liaes Spanish Rishikesh",
      views: "4,561",
      dateRange: "15 - 20 Dec",
      price: "₹63,570",
      tag: "Most Trending",
    },
    {
      id: 7,
      img: img16,
      name: "Liaes Spanish Rishikesh",
      views: "4,561",
      dateRange: "15 - 20 Dec",
      price: "₹63,570",
      tag: "Most Trending",
    },
    {
      id: 8,
      img: img3,
      name: "Liaes Spanish Rishikesh",
      views: "4,561",
      dateRange: "15 - 20 Dec",
      price: "₹63,570",
      tag: "Most Trending",
    },
  ];
  const handleLike = () => {
    console.log("liked");
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <>
      <Properties />
      {/* Cards */}
      <Link to="/properties-overview" onClick={handleScrollToTop}>
        <div className="container mx-auto py-8 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {properties.map((property, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden relative"
              >
                <img
                  className="w-full md:h-[350px] lg:h-[300px] xl:h-[320px] 2xl:h-[380px] rounded-3xl object-cover"
                  src={property.img}
                  alt={property.name}
                />
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="bg-[#0A784714] text-[#0A7847] px-3 p-2 rounded-full text-xs font-semibold">
                      {property.tag}
                    </span>
                    <button className="text-gray-400  transition absolute top-6 right-4 hover:scale-95">
                      <IoMdHeart className="text-3xl hover:text-red-500 text-white hover:text" />
                    </button>
                    <p className="bg-white rounded-full cursor-default absolute left-4 top-4 px-4 py-2">
                      Most Favourite
                    </p>
                  </div>
                  <h3 className="text-lg font-semibold">{property.name}</h3>
                  <p className="text-sm text-gray-500">
                    Viewed {property.views} times last week
                  </p>
                  <p className="text-sm text-gray-500">{property.dateRange}</p>
                  <p className="text-lg font-semibold mt-2">{property.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Link>
    </>
  );
}

export default Cards;
