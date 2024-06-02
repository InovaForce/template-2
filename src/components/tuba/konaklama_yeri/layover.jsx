import React from 'react'
import CardComp from "./cardComp";
import { Container, Row } from "react-bootstrap";
import Spacer from "../../cahit/galerry/spacer";
import "./layover.scss";

const Layover = () => {
  return (
    <div className='layover'> 
        <Spacer height="40px"/>
      <h1 className=" text-center">Konaklama Yerleri</h1>

      <Container className="mt-5">
      
        <Row xs={1}  md={2} lg={3} xxl={4} className="g-4 ">
          <CardComp/>
          <Spacer/>
         
        </Row>
      </Container>
      <Spacer />
    </div>
  )
}

export default Layover
