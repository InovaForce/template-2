import React from "react";
import "../footer/footer.scss" 
import { Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Footer className="footer-box mb-0 ">
      <Container>
        <Row className="col-lg-12">
          <p class="footer-company-name">
            &copy; 2024 Template-2 Made By InovaForce.
          </p>
        </Row>
      </Container>
    </Footer>
  );
};

export default Footer;
