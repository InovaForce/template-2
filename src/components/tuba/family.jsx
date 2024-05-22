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
            <div className="family-title">
              <h2>FAMILY</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={4} md={6} sm={12}>
            <div className="family-image">
              <div className="family-img">
                <Image className="img-fluid" 
				src="/images/family-01.jpg" 
				alt="Mr. Mehmet Genç" 
				width={400} 
				height={300} />
              </div>
              <div className="family-info">
                <h4>Mr. Mehmet Genç</h4>
                <p>Bride's Father</p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className="family-image">
              <div className="family-img">
                <Image className="img-fluid" 
				src="/images/family-02.jpg" 
				alt="Mrs. Genç" 
				width={400} 
				height={300} />
              </div>
              <div className="family-info">
                <h4>Mrs. Genç</h4>
                <p>Bride's Mother</p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className="family-image">
              <div className="family-img">
                <Image className="img-fluid" 
				src="/images/family-03.jpg" 
				alt="Mr. Cahit Ata" 
				width={400} 
				height={300} />
              </div>
              <div className="family-info">
                <h4>Mr. Cahit Ata</h4>
                <p>Bride's Brother</p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className="family-image">
              <div className="family-img">
                <Image className="img-fluid" 
				src="/images/family-01.jpg" 
				alt="Mr. Demir" 
				width={400} 
				height={300} />
              </div>
              <div className="family-info">
                <h4>Mr. Demir</h4>
                <p>Groom's Father</p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className="family-image">
              <div className="family-img">
                <Image className="img-fluid" 
				src="/images/family-02.jpg" 
				alt="Mrs. Şule Demir" 
				width={400} 
				height={300} />
              </div>
              <div className="family-info">
                <h4>Mrs. Şule Demir</h4>
                <p>Groom's Mother</p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className="family-image">
              <div className="family-img">
                <Image className="img-fluid" 
				src="/images/family-04.jpg" 
				alt="Mrs. Eda Sarıkaya" 
				width={400} 
				height={300} />
              </div>
              <div className="family-info">
                <h4>Mrs. Eda Sarıkaya</h4>
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