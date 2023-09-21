import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider1.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Slider1() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/7fd0e4ab26429926.jpg?q=20"
            alt="image1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/fd86cf067aff745c.jpg?q=20"
            alt="image2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/733326adc0164b9d.jpg?q=20"
            alt="image3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/8a89ee09acc1a9e5.jpg?q=20"
            alt="image4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/89c26b04d640c7a9.jpg?q=20"
            alt="image5"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/352e6f0f8034fab5.jpg?q=20"
            alt="image6"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/6bd07fe67e50083a.png?q=20"
            alt="image7"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
