import React from "react";
import { Container, Row } from "react-bootstrap";
import WeddingCard from "./weddingCard";
import "./wedding.scss";

const Wedding = () => {
  return (
    <div className="wedding">
      <Container >
      <h2 className=" text-center">WEDDING</h2>
      <h6 className="text-dark text-center wedding-our mb-5">Our upcoming Weddings</h6>
     
        <Row  sm={1} md={2} lg={3} className="g-4">
          <WeddingCard />
        </Row>
      </Container>
      
    </div>
  );
};

export default Wedding;
