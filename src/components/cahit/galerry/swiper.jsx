"use client";
import "./swiper.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { Card } from "react-bootstrap";
import { RiCloseCircleFill } from "react-icons/ri";
import { useState, useEffect } from "react";

const MySwiper = ({ data, setShow, initialSlideIndex }) => {
  const [swiperKey, setSwiperKey] = useState(0);

  useEffect(() => {
    setSwiperKey((prevKey) => prevKey + 1);
  }, [initialSlideIndex]);

  return (
    <Swiper
      key={swiperKey}
      navigation={true}
      className="mySwiper"
      modules={[Pagination, Navigation]}
      slidesPerView={1}
      centeredSlides={false}
      spaceBetween={0}
      initialSlide={initialSlideIndex}
      style={{
        position: "fixed",
        zIndex: 99,
        height: "70vh",
        width: "70vw",
        margin: "auto",
        objectFit: "cover",
      }}
    >
      <Card>
        <Card.Body>
          {data.map((item) => (
            <SwiperSlide className="swp" key={item.id}>
              <div className="imgDivSwiper">
                <RiCloseCircleFill
                  style={{
                    position: "fixed",
                    top: 30,
                    right: 30,
                    zIndex: 100,
                    cursor: "pointer",
                    transition: "all 0.7s",
                    fontSize: "2rem",
                  }}
                  onClick={() => setShow(false)}
                />
                <Image
                  className="swpimgc rounded-5"
                  src={item.image}
                  alt="image"
                  fill
                />
              </div>
            </SwiperSlide>
          ))}
        </Card.Body>
      </Card>
    </Swiper>
  );
};

export default MySwiper;
