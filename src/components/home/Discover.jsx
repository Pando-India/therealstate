import React from "react";
import Cards from "./Cards";

function Discover() {
  return (
    <>
      {/* headiing */}
      <h2 className="text-[52px] font-semibold text-center leading-[64.04px] 2xl:w-1/3 xl:w-1/2 mx-auto mt-20 mb-10">
        Discover Your Dream Destination
      </h2>
      <Cards />
      <div className="py-4 2xl:py-10">
        <p className="container md:w-10/12 text-left xl:w-full 2xl:w-full mx-auto text-[41px] font-semibold pl-5 2xl:pl-5">
          Top Destinations in Uttarakhand
        </p>
      </div>
    </>
  );
}

export default Discover;
