// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import carousel1 from "../../assets/images/carousel/carousel1.png";
import carousel2 from "../../assets/images/carousel/carousel2.png";
import carousel3 from "../../assets/images/carousel/carousel3.png";
import carousel4 from "../../assets/images/carousel/carousel4.png";
import carousel5 from "../../assets/images/carousel/carousel5.jpg";
import carousel6 from "../../assets/images/carousel/carousel6.jpg";
import carousel7 from "../../assets/images/carousel/carousel7.jpg";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

// Import custom CSS (if needed)

function Carousel() {
  const dummyData = [
    {
      id: 1,
      image: carousel1,
      location: "Rishikesh, India",
      miniDescription: "A serene riverside resort with beautiful mountain views.",
      property: "2 & 3 BHK",
    },
    {
      id: 2,
      image: carousel2,
      location: "Goa, India",
      miniDescription: "A modern apartment just minutes from the beach.",
      property: "1 & 2 BHK",
    },
    {
      id: 3,
      image: carousel3,
      location: "Jaipur, India",
      miniDescription: "A royal villa with traditional Rajasthani architecture.",
      property: "4 & 5 BHK",
    },
    {
      id: 4,
      image: carousel4,
      location: "Mumbai, India",
      miniDescription: "An elegant flat with a stunning city view.",
      property: "3 BHK",
    },
    {
      id: 5,
      image: carousel5,
      location: "Shimla, India",
      miniDescription: "A cozy mountain cabin surrounded by lush pine forests.",
      property: "2 BHK",
    },
    {
      id: 6,
      image: carousel6,
      location: "Udaipur, India",
      miniDescription: "A lakeside resort with a breathtaking view of the city palace.",
      property: "Luxury Suite",
    },
    {
      id: 7,
      image: carousel7,
      location: "Pondicherry, India",
      miniDescription: "A peaceful beachside villa with French colonial charm.",
      property: "3 BHK",
    }
  ]
  

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
              <img src={item.image} alt="" className="w-[1440px] md:h-[510px] xl:h-[580px] 2xl:h-[710px]  rounded-[56px]" />
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
