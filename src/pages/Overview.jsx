import React from "react";
import { MdOutlineFileUpload } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import img1 from "../assets/images/overview_properties/img1.png";
import img2 from "../assets/images/overview_properties/img2.png";
import img3 from "../assets/images/overview_properties/img3.png";
import img4 from "../assets/images/overview_properties/img4.png";
import img10 from "../assets/images/overview_properties/img10.jpg";
import img14 from "../assets/images/overview_properties/img14.jpg";
import img15 from "../assets/images/overview_properties/img15.jpg";
import img16 from "../assets/images/overview_properties/img16.jpg";
import img17 from "../assets/images/overview_properties/img17.jpg";
import layout_plan from "../assets/images/overview_properties/layout_plan.png";
import MortgageCalculator from "../components/properties_overview/MortgageCalculator";
import LatestProperties from "../components/properties_overview/LatestProperties";
import StateWise from "../components/home/StateWise";

function Overview() {
  window.scrollTo(0, 0, { behavior: "smooth" });

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
        <div className="container mx-auto p-4">
          <div className="flex justify-between items-center flex-col lg:flex-row gap-4 w-full">
            {/* Main large image - Full width on mobile, left side on desktop */}
            <div className="w-full lg:w-1/2">
              <img
                src={img14}
                alt="Main property view"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-l-[32px]"
              />
            </div>

            {/* Right side grid - Stack on mobile, 2x2 grid on desktop */}
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
              {/* Top row */}
              <div className="space-y-4">
                <img
                  src={img10}
                  alt="Property view 1"
                  className="w-full h-[150px] sm:h-[200px] lg:h-[242px] object-cover "
                />
                <img
                  src={img17}
                  alt="Property view 2"
                  className="w-full h-[150px] sm:h-[200px] lg:h-[242px] object-cover "
                />
              </div>

              {/* Bottom row */}
              <div className="space-y-4">
                <img
                  src={img15}
                  alt="Property view 3"
                  className="w-9/12 h-[150px] sm:h-[200px] lg:h-[242px]  object-cover rounded-r-[32px]"
                />

                {/* More Photos Button */}
                <div className="relative group cursor-pointer">
                  <img
                    src={img16}
                    alt="More photos"
                    className="w-9/12 h-[150px] sm:h-[200px] lg:h-[242px]  object-cover rounded-r-[32px] brightness-50 group-hover:brightness-75 transition-all duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-base sm:text-lg font-semibold bg-black/20 px-4 py-2 rounded-lg">
                      10+ Photos
                    </span>
                  </div>
                </div>
              </div>
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
            <img src={layout_plan} alt="" className="w-10/12 rounded-2xl" />
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

  // const images = [
  //   {
  //     id: 1,
  //     url: img1,
  //     alt: "Modern house in mountains",
  //     featured: true
  //   },
  //   {
  //     id: 2,
  //     url: img1,
  //     alt: "Beachfront property"
  //   },
  //   {
  //     id: 3,
  //     url: img1,
  //     alt: "Mountain retreat"
  //   },
  // ];

  // return (
  //   <div className="container mx-auto p-4">
  //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  //       {/* Featured Image */}
  //       <div className="md:col-span-2 lg:col-span-2 relative">
  //         <img
  //           src={images[0].url}
  //           alt={images[0].alt}
  //           className="w-full h-[400px] md:h-[500px] object-cover rounded-lg shadow-lg"
  //         />
  //         <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
  //           <h3 className="text-white text-lg font-semibold">Featured Property</h3>
  //         </div>
  //       </div>

  //       {/* Smaller Images */}
  //       {images.slice(3).map((image, index) => (
  //         <div key={image.id} className={`relative ${index === images.length - 2 ? 'lg:col-span-1' : ''}`}>
  //           <img
  //             src={image.url}
  //             alt={image.alt}
  //             className="w-full h-[200px] md:h-[240px] object-cover rounded-lg shadow-lg"
  //           />
  //         </div>
  //       ))}

  //       {/* More Photos Button */}
  //       <div className="relative group cursor-pointer">
  //         <img
  //           src={img10}
  //           alt="More photos"
  //           className="w-full h-[200px] md:h-[240px] object-cover rounded-lg shadow-lg brightness-50 group-hover:brightness-75 transition-all"
  //         />
  //         <div className="absolute inset-0 flex items-center justify-center">
  //           <span className="text-white text-lg font-semibold">10+ Photos</span>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default Overview;
