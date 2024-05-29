"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./home-swiper.scss";
import Image from "next/image";
import Counter from "@/components/counter/counter";
import GettingMarried from "./getting-married";

// Core version + pagination, autoplay modules:
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper and modules styles
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import autoplay styles if needed
import Adress from "./adress";

const HomeSwiper = () => {
  return (
      <div className="swiper-div">
        <Swiper
          className="swiper-carousel"
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          loop={true}
          autoplay={{ delay: 3000 }} // Set delay to 3000 ms (3 seconds) for demonstration
          modules={[Pagination, Autoplay]} // Remove Navigation from modules
          pagination={{ clickable: true }}
        >
          <SwiperSlide className="slide-carousel">
            <Image
              src="/images/wedding-8.jpg"
              width={1800}
              height={800}
              alt="Wedding 8"
            />
          </SwiperSlide>
       
          <SwiperSlide className="slide-carousel">
            <Image
              src="/images/wedding-14.jpg"
              width={1800}
              height={800}
              alt="Wedding 4"
            />
          </SwiperSlide>
          <Counter />
        <GettingMarried />
          <Adress/>
  
        </Swiper>
      
      </div>
  );
};

export default HomeSwiper;