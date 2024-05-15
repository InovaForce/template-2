
import CardComp from "./cardComp";
import { Container, Row } from "react-bootstrap";
import Spacer from "./spacer";


const Gallery = () => {
  
//--
  
  
  return (
    <div style={{  backgroundColor: "white" }} className="gallery">

      <Spacer />
      <h2 className="text-warning text-center">GALLERY</h2>
      <h6 className="text-dark text-center">Some of our finest moments</h6>
      <Container className="mt-5">
        <Row xs={1} md={2} lg={3} xxl={4} className="g-4">
          <CardComp/>
        </Row>
      </Container>
      <Spacer />
    </div>
  );
};

export default Gallery;
