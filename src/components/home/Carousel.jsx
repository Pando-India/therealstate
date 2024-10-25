// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import carousel1 from "../../assets/images/carousel/carousel1.png";
import carousel2 from "../../assets/images/carousel/carousel2.png";
import carousel3 from "../../assets/images/carousel/carousel3.png";
import carousel4 from "../../assets/images/carousel/carousel4.png";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

// Import custom CSS (if needed)

function Carousel() {
  const dummyData = [
    {
      id: 1,
      image: carousel1,
      location: "New York, USA",
      miniDescription: "A beautiful apartment in the heart of the city.",
      property: "3 & 4 BHK",
    },
    {
      id: 2,
      image: carousel2,
      location: "Paris, France",
      miniDescription: "Charming studio near the Eiffel Tower.",
      property: "3 & 4 BHK",
    },
    {
      id: 3,
      image: carousel3,
      location: "Tokyo, Japan",
      miniDescription: "Modern house with a traditional Japanese garden.",
      property: "3 & 4 BHK",
    },
    {
      id: 4,
      image: carousel4,
      location: "Sydney, Australia",
      miniDescription: "Spacious villa with ocean views.",
      property: "3 & 4 BHK",
    },
  ];

  return (
    <div>
      <h2 className="text-[40px] font-semibold text-center mt-28">
        Featured Projects
      </h2>
      <div className="relative flex justify-center items-center w-8/12 mx-auto my-8">
        <Swiper
          pagination={{
            clickable: true,
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          loop={true}
        >
          {dummyData.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.image} alt="" className="" />
              <div className="absolute bottom-10 text-white left-10">
                <p className="text-xl font-semibold">{item.location}</p>
                <p className="text-md font-normal">
                  {item.miniDescription}
                </p>
                <p className="text-md font-normal">{item.property}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Carousel;
