"use client";
import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import './cardComp.scss';
import data from '@/data/gallery.json';
import Image from 'next/image';
import MySwiper from './swiper';


const CardComp = () => {
  const [show, setShow] = useState(false);

  const toggleSwiper = () => {
    setShow(true);
  };

  return (
    <>
      {show && <MySwiper data={data} setShow={setShow}/>}
      {show && <div style={{ marginTop: "0", position: "fixed", height: "100vh", width: "100vw", top: 0, left: 0, right: 0, bottom: 0 ,  zIndex: 98, backgroundColor: "rgba(0, 0, 0, 0.6)"}}></div>}

      {data.map((item) => (
        <Col className="text-center mx-auto" key={item.id}>
          <div className="img-container" onClick={toggleSwiper}>
            <Image
              src={item.image}
              alt="image"
              width={300}
              height={200}
              className="imgStyle"
            />
            <div className="overlay"></div>
          </div>
        </Col>
      ))}
    </>
  );
};

export default CardComp;
