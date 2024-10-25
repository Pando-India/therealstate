import React from "react";
import { MdOutlineFileUpload } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import img1 from "../assets/images/overview_properties/img1.png";
import img2 from "../assets/images/overview_properties/img2.png";
import img3 from "../assets/images/overview_properties/img3.png";
import img4 from "../assets/images/overview_properties/img4.png";
import layout from "../assets/images/overview_properties/layout.png";
import MortgageCalculator from "../components/properties_overview/MortgageCalculator";
import LatestProperties from "../components/properties_overview/LatestProperties";
import StateWise from "../components/home/StateWise";

function Overview() {
  // window.scrollTo(0, 0, { behavior: "smooth" });

  return (
    <div className="bg-[#fafafa]">
      <div className="container mx-auto">
        {/* Heading and share & save button */}
        <div className="flex justify-between py-6 w-11/12 md:mx-auto 2xl:mx-0">
          <p className="text-[36px] font-semibold">
            Discover Your Dream Destination
          </p>
          <div className="flex gap-6">
            <button className="flex items-center gap-2">
              <MdOutlineFileUpload className="text-xl" />
              Share
            </button>
            <button className="flex items-center gap-2">
              <IoMdHeart className="text-xl" />
              Save
            </button>
          </div>
        </div>
        {/* Properties images */}
        <div className="flex items-center md:justify-center 2xl:justify-start gap-3">
          <img src={img1} alt="" className="md:w-[42rem] 2xl:w-auto" />
          <div className="flex flex-col gap-4 w-1/5">
            <img src={img2} alt="" />
            <img src={img3} alt="" />
          </div>
          <div className="flex flex-col gap-4 w-1/5">
            <img src={img4} alt="" />
            <div className="relative rounded-r-3xl bg-[#1B2F26D4]">
              <img src={img4} alt="" className="opacity-40" />
              <span className="absolute inset-0 flex items-center justify-center text-white">
                10+ Photos
              </span>
            </div>
          </div>
        </div>
        {/* Properties price */}
        <div className="my-4 md:ml-14 2xl:ml-0">
          <p className=" text-2xl font-semibold">
            Entire home in Ilha Grande, Rishikesh
          </p>
          <p className="text-xl">Discover Your Dream Destination</p>
          <p className="text-2xl font-semibold my-3">₹ 70 Lac & 80 Lac</p>
        </div>
        {/* Properties details */}
        <div className="flex items-center justify-between w-11/12 mx-auto gap-10">
          {/* Overview  */}
          <div className="">
            <span className="bg-[#0A784714] text-[#0A7847] px-6 p-4 rounded-full text-md font-semibold my-4 inline-block">
              Cottage
            </span>
            <p className="text-2xl font-semibold my-2">Overview</p>
            <p className="text-xl text-[#1E1E1E]">
              “Ravista Cottages” is a luxury resort located in Village Kund,
              Rishikesh Lansdowne Road, near Bungy Jumping Rishikesh,
              Uttarakhand. The resort is spread over 3 acres (65 Nali). It has
              32 independent luxury Villas adding 25 wooden cottages Villas,
              conference hall, multi-cuisine restaurant, bar, spa, yoga and
              meditation center, and other rejuvenation avenues.
            </p>
            {/* Amenities */}
            <div className="text-xl text-[#1E1E1E] my-4">
              <p className="text-2xl font-semibold my-2">
                Resorts Details and Amenities:
              </p>
              <p>Total Villa: 32 Villas (43 Rooms)</p>
              <p>Reception: 1 Nos (30 Pax)</p>
              <p>Restaurant: 1 Nos (80 Pax)</p>
              <p>Bar: 1 Nos (30 Pax)</p>
              <p>Open Bar Area: 1 Nos (20 Pax)</p>
              <p>Open Garden Area: 100 Pax</p>
              <p>Yoga & Conference Room: 100 Pax</p>
              <p>
                Massage Room: 2 NosSwimming Pool: 1 Nos Full SizeWedding
                Garden: 1 Acres Approx.
              </p>
              <p>
                Kitchen: Kitchen, Dry Store, Pantry, Cold Storage Area, Bakery
              </p>
              <p>
                BOH (back of The House): Staff Dormitory, Changing Room (Male
                & Female), Office
              </p>
            </div>
          </div>
          <MortgageCalculator />
        </div>
        {/* layout plan */}
        <div className="my-4 flex justify-between items-center w-11/12 mx-auto">
          <div>
            <p className="text-2xl font-semibold my-4 ml-2">Layout Plan</p>
            <img src={layout} alt="" className="w-10/12" />
          </div>
          <LatestProperties />
        </div>
        <hr className="text-black w-7/12 " />
        <div className="my-10">
          <p className="text-2xl font-semibold my-4 w-10/12 mx-auto">
            Related Properties
          </p>
          <StateWise />
        </div>
      </div>
    </div>
  );
}

export default Overview;
