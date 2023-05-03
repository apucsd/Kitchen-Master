import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper";

const FeedBack = () => {
  return (
    <div className="md:w-1/2 mx-auto my-8 bg-white rounded md:p-4">
      <div className="text-center my-8">
        <h2 className=" text-xl">----CUSTOMER FEEDBACK----</h2>
        <h1 className="text-4xl font-serif  my-4">
          What Our Clients Say About Our <br /> Food & Services
        </h1>
      </div>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="shadow-lg md:md:md:p-20 p-3 ">
            <h1>
              First time in Chef Master and YOU have to go! It's the cutest
              little spot with amazing food. The Foie Gras is to die for. IT WAS
              FIRE!! The service we received was so amazing and we will
              definitely be back again. They made us feel welcomed and gave us
              an amazing experience
            </h1>
            <div>
              <h4 className="font-semibold mt-4">Rakesh Khanna</h4>
              <p>
                <small>Fashion Designer</small>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg md:md:md:p-20 p-3 ">
            <h1>
              First time in Chef Master and YOU have to go! It's the cutest
              little spot with amazing food. The Foie Gras is to die for. IT WAS
              FIRE!! The service we received was so amazing and we will
              definitely be back again. They made us feel welcomed and gave us
              an amazing experience
            </h1>
            <div>
              <h4 className="font-semibold mt-4">Priya Das</h4>
              <p>
                <small>Makeup Designer</small>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg md:md:md:p-20 p-3 ">
            <h1>
              First time in Chef Master and YOU have to go! It's the cutest
              little spot with amazing food. The Foie Gras is to die for. IT WAS
              FIRE!! The service we received was so amazing and we will
              definitely be back again. They made us feel welcomed and gave us
              an amazing experience
            </h1>
            <div>
              <h4 className="font-semibold mt-4">Suresh Raj</h4>
              <p>
                <small>Engineer</small>
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default FeedBack;
