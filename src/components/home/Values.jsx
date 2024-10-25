import React from "react";
import card1 from "../../assets/images/values/card4.png";
import card2 from "../../assets/images/values/card3.png";
import card3 from "../../assets/images/values/card2.png";
import card4 from "../../assets/images/values/card1.png";
function Values() {
  const values = [
    {
      img: card1,
      title: "Quality",
      text: "We design spaces that foster Everyday Joys, bringing together communities, families, and homes—one at a time.",
    },
    {
      img: card2,
      title: "Thriving Communities",
      text: "We design spaces that foster Everyday Joys, bringing together communities, families, and homes—one at a time.",
    },
    {
      img: card3,
      title: "Modern Design",
      text: "We design spaces that foster Everyday Joys, bringing together communities, families, and homes—one at a time.",
    },
    {
      img: card4,
      title: "Sustainbility",
      text: "We design spaces that foster Everyday Joys, bringing together communities, families, and homes—one at a time.",
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="my-20">
        <p className="text-[52px] font-semibold text-center">
          Values We Uphold
        </p>
        <p className="text-2xl 2xl:text-[24px] font-normal text-center w-7/12 mx-auto ">
          We design spaces that foster Everyday Joys, bringing together
          communities, families, and homes—one at a time."
        </p>
      </div>
      <div className="flex justify-center items-center gap-4 2xl:gap-6 md:w-10/12 2xl:w-full mx-auto">
        {values.map((value) => (
          <div className="relative max-w-sm ">
            {/* Image */}
            <img src={value.img} alt="" className=""/>
            <div className="absolute inset-x-0 bottom-0 w-full h-1/3 bg-gradient-to-t from-black/75 to-transparent rounded-3xl">
              <p className=" cursor-none absolute bottom-6 w-full flex justify-center items-center text-[28px] font-medium text-white text-center">
                {value.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>  
  );
}

export default Values;
