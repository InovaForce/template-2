"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./home-swiper.scss";
import Image from "next/image";
import Counter from "@/components/counter/counter";
import GettingMarried from "./getting-married";

// core version + navigation, pagination modules:
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//importlara bak-swiper
const HomeSwiper = () => {
  return (
    <div className="swiper-opacity">
      <div className="swiper-div">
        <Swiper
          className="swiper-carousel"
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          loop={true}
          autoplay={{ delay: 1000 }}
        >
          <SwiperSlide className="slide-carousel">
            <Image src="/images/wedding-8.jpg" width={1800} height={800} />
          </SwiperSlide>
          <SwiperSlide className="slide-carousel">
            <Image src="/images/wedding-2.jpg" width={1800} height={800} />
          </SwiperSlide>
          <SwiperSlide className="slide-carousel">
            <Image src="/images/wedding-3.jpg" width={1800} height={800} />
          </SwiperSlide>
          <SwiperSlide className="slide-carousel">
            <Image src="/images/wedding-4.jpg" width={1800} height={800} />
          </SwiperSlide>
          <SwiperSlide className="slide-carousel">
            <Image src="/images/wedding-5.jpg" width={1800} height={800} />
          </SwiperSlide>
          <SwiperSlide className="slide-carousel">
            <Image src="/images/wedding-6.jpg" width={1800} height={800} />
          </SwiperSlide>
        </Swiper>
        <Counter />
        <GettingMarried />
      </div>
    </div>
  );
};

export default HomeSwiper;
