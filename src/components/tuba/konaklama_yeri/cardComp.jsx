"use client";
import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import './cardComp.scss';
import data from '@/data/layover.json';
import Image from 'next/image';
import MySwiper from './swiper';
import { FaLocationDot } from "react-icons/fa6";

const CardComp = () => {
  const [show, setShow] = useState(false);
  const [initialSlideIndex, setInitialSlideIndex] = useState(0);

  const toggleSwiper = (index) => {
    setInitialSlideIndex(index);
    setShow(true);
  };

  return (
    <>
      {show && <MySwiper data={data} setShow={setShow} initialSlideIndex={initialSlideIndex} />}
      {show && (
        <div
          style={{
            marginTop: "0",
            position: "fixed",
            height: "100vh",
            width: "100vw",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 98,
            backgroundColor: "rgba(0, 0, 0, 0.6)"
          }}
        ></div>
      )}

      {data.map((item, index) => (
        <Col className="text-center mx-auto" key={item.id}>
          <div className="img-container mx-auto" onClick={() => toggleSwiper(index)}>
            <Image
              src={item.image}
              alt="image"
              width={300}
              height={200}
              className="imgStyle"
            />
            <div className="overlay"></div>
          </div>
          
          <div className="layover_card-details">
            <p className='layover_description'>{item.description}</p>
            <a href={item.location} target="_blank" rel="noopener noreferrer" className='layover_location'><FaLocationDot /></a>
          </div>
        </Col>
      ))}

      
    </>
  );
};

export default CardComp;
