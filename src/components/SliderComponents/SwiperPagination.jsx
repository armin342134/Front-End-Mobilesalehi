import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./SwiperPagination.css";

// import required modules
import { Pagination, Autoplay, Keyboard } from "swiper/modules";

export default function SwiperPagination() {
  return (
    <>
      <Swiper
        modules={[Autoplay, Pagination, Keyboard]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          dynamicBullets: true,
          freeMode: true,
        }}
        keyboard={{ enabled: true }}
        className="mySwiper"
        slidesPerView={"auto"}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
      >
        <SwiperSlide>
          <img
            src="/Images/iphone\iphone14promax\14PROMAX.webp"
            alt=""
            className="img-"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="/Images/iphone\iphone15\15W.webp" alt="" className="img-" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="/Images/iphone\iphone15\15W.webp" alt="" className="img-" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="/Images/iphone\iphone15\15W.webp" alt="" className="img-" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/Images/iphone\iphone13promax\iphone-13-Pro-Max-Apple-4-.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Images/iphone\iphone14promax\14PROMAX.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Images/iphone\iphone13\iphone-13-Apple-2-.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Images/iphone\iphone13\iphone-13-Apple-3-.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Images/iphone\iphone14\14BB.webp" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
