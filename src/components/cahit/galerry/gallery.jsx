
import CardComp from "./cardComp";
import { Container, Row } from "react-bootstrap";
import Spacer from "./spacer";
import "./gallery.scss";

const Gallery = () => {
  

  
  
  return (
    <div  className="gallery">

      <Spacer height="40px"/>
      <h2 className="text-warning text-center">GALLERY</h2>
      <h6 className="text-dark text-center gal-some">Some of our finest moments</h6>
      <Container className="mt-5">
        <Row xs={1} md={2} lg={3} xxl={4} className="g-4 bg-white">
          <CardComp/>
        </Row>
      </Container>
      <Spacer />
    </div>
  );
};

export default Gallery;
