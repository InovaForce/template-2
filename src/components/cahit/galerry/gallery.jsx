
import CardComp from "./cardComp";
import { Container, Row } from "react-bootstrap";
import Spacer from "./spacer";
import "./gallery.scss";

const Gallery = () => {
  

  
  
  return (
    <div  className="gallery">

      <Spacer height="40px"/>
      <h1 className=" text-center">Galeri</h1>

      <Container className="mt-5">
        <Row xs={1}  md={2} lg={3} xxl={4} className="g-4 ">
          <CardComp/>
        </Row>
      </Container>
      <Spacer />
    </div>
  );
};

export default Gallery;
