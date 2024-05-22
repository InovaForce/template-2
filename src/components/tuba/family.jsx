import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import "./family.scss";

const Family = () => {
  return (
    <div className="family-body">
      <Container>
        <Row >
          <Col lg={12}>
            <div className="family-title mb-5">
              <h2>FAMILY</h2>
            
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={4} md={6} sm={12}>
            <div className="family-image">
              <div className="family-img">
                <Image className="img-fluid" 
				src="/images/family-01.jpg" 
				alt="Mr." 
				width={400} 
				height={300} />
              </div>
              <div className="family-info">
                <h4>Mr. Brown</h4>
                <p>Bride's Father</p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className="family-image">
              <div className="family-img">
                <Image className="img-fluid" 
				src="/images/family-02.jpg" 
				alt="Mrs." 
				width={400} 
				height={300} />
              </div>
              <div className="family-info">
                <h4>Mrs. Brown</h4>
                <p>Bride's Mother</p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className="family-image">
              <div className="family-img">
                <Image className="img-fluid" 
				src="/images/family-03.jpg" 
				alt="Mr." 
				width={400} 
				height={300} />
              </div>
              <div className="family-info">
                <h4>Mr. Brown</h4>
                <p>Bride's Brother</p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className="family-image">
              <div className="family-img">
                <Image className="img-fluid" 
				src="/images/family-01.jpg" 
				alt="Mr." 
				width={400} 
				height={300} />
              </div>
              <div className="family-info">
                <h4>Mr. Smith</h4>
                <p>Groom's Father</p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className="family-image">
              <div className="family-img">
                <Image className="img-fluid" 
				src="/images/family-02.jpg" 
				alt="Mrs. Smith" 
				width={400} 
				height={300} />
              </div>
              <div className="family-info">
                <h4>Mrs. Smith</h4>
                <p>Groom's Mother</p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className="family-image">
              <div className="family-img">
                <Image className="img-fluid" 
				src="/images/family-04.jpg" 
				alt="Mrs." 
				width={400} 
				height={300} />
              </div>
              <div className="family-info">
                <h4>Mrs. Smith</h4>
                <p>Groom's Sister</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Family;