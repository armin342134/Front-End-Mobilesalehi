import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductItem from "../ProductItem";
import useProductList from "../../data/product";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Autoplay, Keyboard } from "swiper/modules";

export default function SamsungSlider() {
  const productList = useProductList();
  return (
    <>
      <div className="w-100 mt-5 text-center ">
        <h1> محصولات سامسونگ</h1>
      </div>
      <Swiper
        modules={[FreeMode, Pagination, Autoplay, Keyboard]}
        key={productList.productList}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        loop={true}
        keyboard={{ enabled: true }}
        pagination={{
          clickable: true,
        }}
        className="mySlider "
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 25,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        {productList.productList
          .filter((item) => item.brand == "samsung")
          .map((item) => (
            <SwiperSlide key={item._id} className="overflow-hidden">
              <ProductItem product={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
