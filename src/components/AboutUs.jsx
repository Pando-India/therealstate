import React from "react";
import groupImg from "../assets/images/aboutus/GroupImg.png";

function AboutUs() {
  return (
    <div className="flex justify-around items-center container mx-auto py-32">
      {/* about us */}
      <div className="w-5/12">
        <p className=" text-4xl font-semibold">About Us</p>
        <div className="text-xl font-normal flex flex-col gap-10 my-5">
          <p>
            Established in 1987, the Real Estate Group has its roots in India's
            Independence and Swadeshi movement. Our founder, Ardeshir Godrej, a
            lawyer-turned-serial entrepreneur failed with a few ventures before
            he struck gold with a locks business.
          </p>
          <p>
            Today, we enjoy the patronage of 1.1 billion consumers globally
            across consumer goods, real estate, appliances, agriculture and many
            other businesses. In fact, our geographical footprint extends beyond
            Earth, with our engines now powering many of India's space missions.
          </p>
          <p>
            Established in 1987, the Real Estate Group has its roots in India's
            Independence and Swadeshi movement. Our founder, Ardeshir Real Estate, a
            lawyer-turned-serial entrepreneur failed with a few ventures before
            he struck gold with a locks business.
          </p>
        </div>
        <button className="border-[1.14px] border-[#0A7847] hover:bg-[#0A7847] hover:text-white transition-all duration-300 hover:scale-95 text-[#0A7847] rounded-full px-8 py-4 font-medium mt-10">
          Read More
        </button>
      </div>
      {/* images */}
      <div>
        <img src={groupImg} alt=""/>
      </div>
    </div>
  );
}

export default AboutUs;
