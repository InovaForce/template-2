import React from "react";
import { Container, Row } from "react-bootstrap";
import WeddingCard from "./weddingCard";
import "./wedding.scss";

const Wedding = () => {
  return (
    <div className="wedding">
      <Container >
      <h1 className="mb-5 text-center">GALLERY</h1>

        <Row xs={1} sm={2}   lg={3} className=" g-4">
          <WeddingCard />
        </Row>
      </Container>
      
    </div>
  );
};

export default Wedding;
