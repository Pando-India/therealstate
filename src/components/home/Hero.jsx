import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import Properties from "./Properties";


function Hero() {

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProperty, setSelectedProperty] = useState("All");

  const handleSearch = () => {
    // Handle search functionality here
    console.log(`Searching for: ${searchQuery} in ${selectedProperty}`);
  };
  return (
    <>
      <div className="bg-heroBg w-full md:h-[70vh] xl:h-[80vh] bg-cover bg-center ">
        <div className="flex justify-center items-center h-full text-white flex-col">
          <h1 className="text-[61px] font-medium xl:leading-[60px] 2xl:leading-[73.64px]">
            Let’s Find a Property that’s
          </h1>
          <h1 className="text-[61px] font-medium">Perfect for You</h1>
          {/* Search Bar */}
          <div className="flex justify-between items-center mt-10 p-3 bg-white rounded-full max-w-2xl w-full">
            <div className="relative w-full max-w-2xl ">
              {/* Search Input */}
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search here..."
                className="text-[#b8b8b8] placeholder:text-[#b8b8b8] w-full pl-4 pr-24 py-2 focus:outline-none focus:ring-blue-500 outline-none"
              />

              {/* Dropdown */}
              <select
                value={selectedProperty}
                onChange={(e) => setSelectedProperty(e.target.value)}
                className="absolute right-16 top-0 bottom-0 h-full rounded-full bg-[#ecf5eb] px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              >
                <option value="All">All Properties</option>
                <option value="Title">Lands</option>
                <option value="Description">Villas</option>
                <option value="Tags">Cottage</option>
                <option value="Tags">Plots</option>
                <option value="Tags">Residential</option>
                <option value="Tags">Resorts</option>
              </select>

              {/* Search Button */}
              <button
                onClick={handleSearch}
                className="absolute right-0 top-0 bottom-0 bg-[#0A7847] text-white px-4 py-2 hover:bg-[#1EB83A] focus:outline-none rounded-full"
              >
                <CiSearch className="text-xl font-bold" />
              </button>
            </div>
          </div>

          {/* Below blocks */}
          <Properties/>

          {/* offer Line */}
          <p className="text-[#EEFF00] text-center my-10 font-light italic">Limited-Time Offer: Up to 10% Off on Select Properties!</p>
        </div>
      </div>
    </>
  );
}

export default Hero;
