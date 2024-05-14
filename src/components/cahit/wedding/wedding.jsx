import React from "react";
import { Container, Row } from "react-bootstrap";
import WeddingCard from "./weddingCard";
import Spacer from "../galerry/spacer";

const Wedding = () => {
  return (
    <div className="wedding">
      <Container >
      <h2 className="text-warning text-center">WEDDING</h2>
      <h6 className="text-dark text-center">Our upcoming Weddings</h6>
      <Spacer height="40px"/>
        <Row  sm={1} md={2} lg={3} className="g-4">
          <WeddingCard />
        </Row>
      </Container>
      
    </div>
  );
};

export default Wedding;
