"use client";
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import "./attractions.scss";
import Data from '@/data/attraction_data.json';



const Attractions = () => {
  return (
    <div className="attractions-body">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="attractions-title mb-5">
              <h2>Gezilecek Yerler</h2>
            </div>
          </Col>
        </Row>
        <Row>
          {Data.map(member => (
            <Col lg={4} md={6} sm={12} key={member.id}>
              <div className="attractions-image">
                <div className="attractions-img">
                  <Image 
                    className="img-fluid" 
                    src={member.src} 
                    alt={member.alt} 
                    width={400} 
                    height={300} 
                  />
                </div>
                <div className="attractions-info">
                  <h4>{member.name}</h4>
                
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Attractions
