import React from "react";
import { HiHomeModern } from "react-icons/hi2";
import villas from "../../assets/images/properties/villas.svg"
import ressorts from "../../assets/images/properties/ressorts.svg"
import res from "../../assets/images/properties/res.svg"
import plots from "../../assets/images/properties/plots.svg"
import lands from "../../assets/images/properties/lands.svg"
import cottage from "../../assets/images/properties/cottage.svg"



function Properties() {
  const categories = [
    { icon: <HiHomeModern />, img: villas, name: "Villas", count: 7 },
    { icon: <HiHomeModern />, img: cottage, name: "Cottage", count: 5 },
    { icon: <HiHomeModern />, img: lands, name: "Lands", count: 10 },
    { icon: <HiHomeModern />, img: plots, name: "Plots", count: 4 },
    { icon: <HiHomeModern />, img: res, name: "Residential", count: 8 },
    { icon: <HiHomeModern />, img: ressorts, name: "Resort", count: 6 },
  ];
  return (
    <>
      <div className="flex justify-center space-x-4 my-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="cursor-pointer border-[0.97px] border-[#0A784729] text-[#636363] py-2 px-4 rounded-full flex items-center justify-center hover:bg-[#f1f7f4] transition duration-300 gap-4" id="properties"
          >
            {/* <span className="text-3xl">{category.icon}</span> */}
            <img src={category.img} alt="" />
            <div className="flex flex-col">
              <span className="text-lg font-semibold">{category.name}</span>
              <span className="text-sm">{category.count} Properties</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Properties;
