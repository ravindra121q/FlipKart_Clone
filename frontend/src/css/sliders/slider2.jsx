import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./slider1.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function Slider2() {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "16px",
            border: "1px solid #F1F1F1",
            width: "200px",
            height: "250px",
            padding: "5px",
            borderRadius: "10px",
          }}
        >
          <img
            style={{ width: "95%" }}
            src="https://rukminim2.flixcart.com/image/312/312/xif0q/monitor/y/l/9/pro-mp273w-full-hd-27-mp273w-msi-original-imaghsfwtj5tvtfj.jpeg?q=70"
            alt="Best Of Trimmers"
          />{" "}
          <br />
          <p>Asus Monitors</p>
          <p>From 14999</p>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "16px",
            border: "1px solid #F1F1F1",
            width: "200px",
            height: "250px",
            padding: "5px",
            borderRadius: "10px",
          }}
        >
          <img
            style={{ width: "95%" }}
            src="https://rukminim2.flixcart.com/image/312/312/xif0q/monitor/y/l/9/pro-mp273w-full-hd-27-mp273w-msi-original-imaghsfwtj5tvtfj.jpeg?q=70"
            alt="Best Of Trimmers"
          />{" "}
          <br />
          <p>Asus Monitors</p>
          <p>From 14999</p>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "16px",
            border: "1px solid #F1F1F1",
            width: "200px",
            height: "250px",
            padding: "5px",
            borderRadius: "10px",
          }}
        >
          <img
            style={{ width: "95%" }}
            src="https://rukminim2.flixcart.com/image/312/312/xif0q/monitor/y/l/9/pro-mp273w-full-hd-27-mp273w-msi-original-imaghsfwtj5tvtfj.jpeg?q=70"
            alt="Best Of Trimmers"
          />{" "}
          <br />
          <p>Asus Monitors</p>
          <p>From 14999</p>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "16px",
            border: "1px solid #F1F1F1",
            width: "200px",
            height: "250px",
            padding: "5px",
            borderRadius: "10px",
          }}
        >
          <img
            style={{ width: "95%" }}
            src="https://rukminim2.flixcart.com/image/312/312/xif0q/monitor/y/l/9/pro-mp273w-full-hd-27-mp273w-msi-original-imaghsfwtj5tvtfj.jpeg?q=70"
            alt="Best Of Trimmers"
          />{" "}
          <br />
          <p>Asus Monitors</p>
          <p>From 14999</p>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "16px",
            border: "1px solid #F1F1F1",
            width: "200px",
            height: "250px",
            padding: "5px",
            borderRadius: "10px",
          }}
        >
          <img
            style={{ width: "95%" }}
            src="https://rukminim2.flixcart.com/image/312/312/xif0q/monitor/y/l/9/pro-mp273w-full-hd-27-mp273w-msi-original-imaghsfwtj5tvtfj.jpeg?q=70"
            alt="Best Of Trimmers"
          />{" "}
          <br />
          <p>Asus Monitors</p>
          <p>From 14999</p>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "16px",
            border: "1px solid #F1F1F1",
            width: "200px",
            height: "250px",
            padding: "5px",
            borderRadius: "10px",
          }}
        >
          <img
            style={{ width: "95%" }}
            src="https://rukminim2.flixcart.com/image/312/312/xif0q/monitor/y/l/9/pro-mp273w-full-hd-27-mp273w-msi-original-imaghsfwtj5tvtfj.jpeg?q=70"
            alt="Best Of Trimmers"
          />{" "}
          <br />
          <p>Asus Monitors</p>
          <p>From 14999</p>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "16px",
            border: "1px solid #F1F1F1",
            width: "200px",
            height: "250px",
            padding: "5px",
            borderRadius: "10px",
          }}
        >
          <img
            style={{ width: "95%" }}
            src="https://rukminim2.flixcart.com/image/312/312/xif0q/monitor/y/l/9/pro-mp273w-full-hd-27-mp273w-msi-original-imaghsfwtj5tvtfj.jpeg?q=70"
            alt="Best Of Trimmers"
          />{" "}
          <br />
          <p>Asus Monitors</p>
          <p>From 14999</p>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "16px",
            border: "1px solid #F1F1F1",
            width: "200px",
            height: "250px",
            padding: "5px",
            borderRadius: "10px",
          }}
        >
          <img
            style={{ width: "95%" }}
            src="https://rukminim2.flixcart.com/image/312/312/xif0q/monitor/y/l/9/pro-mp273w-full-hd-27-mp273w-msi-original-imaghsfwtj5tvtfj.jpeg?q=70"
            alt="Best Of Trimmers"
          />{" "}
          <br />
          <p>Asus Monitors</p>
          <p>From 14999</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
