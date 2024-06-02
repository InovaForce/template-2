"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { Card, Col } from "react-bootstrap";
import data from "@/data/wedding.json";
import "./wedding.scss";
import {
  MdOutlineArrowDropDownCircle,
  MdOutlineArrowDropUp,
} from "react-icons/md";

const WeddingCard = () => {
  const [showMap, setShowMap] = useState({});
  const cardRef = useRef(null);

  const toggleShow = (id) => {
    setShowMap((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      {data.map((item) => (
        <Col key={item.id}>
          <Card
            onClick={() => {
              toggleShow(item.id);
            }}
            className="wedding-card"
            ref={cardRef}
          >
            <div className="card-image">
              <Image
                src={item.image}
                alt={item.title}
                fill
                objectFit="cover"
              />
            </div>
            {showMap[item.id] ? (
              <div
                className="cardBodyDiv"
                style={{ height: showMap[item.id] ? "150px" : "0" }}
              >
                <p>{item.parag}</p>
              </div>
            ) : null}

            <Card.Body className="d-flex justify-content-between align-items-center">
              <div>
                <Card.Title>{item.title}</Card.Title>
                <Card.Subtitle>{item.time}</Card.Subtitle>
              </div>
              {showMap[item.id] ? (
                <div className="d-flex justify-content-center  align-items-center circlearr border-3 border border-danger rounded-circle">
                  <MdOutlineArrowDropUp style={{fontSize: "22px"}} className="circlearr text-danger rounded" />
                </div>
              ) : (
                <MdOutlineArrowDropDownCircle className=" fs-2 text-danger rounded" />
              )}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default WeddingCard;
