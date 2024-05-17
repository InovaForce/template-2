import React from "react";
import { Card, CardBody, CardFooter, Image } from "react-bootstrap";
import {
  FaFacebookSquare,
  FaHeart,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import "./about.scss";

const AboutUs = () => {
  return (
    <div className="about-body">
        <div className="container">
          <div className="row ">
            <div className="col-lg-12 text-center">
              <div className="about-title">
                <h2>
                Mervenur  <span> & </span> Muhammed
                       </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="row align-items-center about-main-info">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <Card className="bride-groom">
                    <CardBody className="about-image">
                      <Image
                        src="/images/about-img-01.jpg"
                        alt=""
                        width={300}
                        height={200}
                        className="rounded img-fluid"
                      />
                    </CardBody>
                    <CardFooter className=" card-footer g-10">
                      <a  href="#">
                        <FaFacebookSquare />
                      </a>
                      <a href="#">
                        <FaTwitterSquare />
                      </a>
                      <a href="#">
                        <FaInstagramSquare />
                      </a>
                    </CardFooter>
                  </Card>
                </div>
                <div className="col-lg-8 col-md-6 col-sm-12">
                  <h2 className="about-heart">
                    
                  <FaHeart />
                    <span className="about-name"> Mervenur </span>
                    <FaHeart />
                    
                  </h2>
                  <p className="about-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Adipisci eum est fuga mollitia, suscipit officia inventore
                    ut possimus exercitationem libero iste, doloribus provident
                    debitis similique consectetur, dicta veritatis eaque
                    molestias.
                  </p>
                </div>
              </div>
              <div className="row align-items-center about-main-info">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <Card className="bride-groom">
                    <CardBody className="about-image">
                      <Image
                        src="/images/about-img-02.jpg"
                        alt=""
                        width={300}
                        height={200}
                        className="rounded img-fluid"
                      />
                    </CardBody>
                    <CardFooter className="card-footer">
                      <a href="#">
                        <FaFacebookSquare />
                      </a>
                      <a href="#">
                        <FaTwitterSquare />
                      </a>
                      <a href="#">
                        <FaInstagramSquare />
                      </a>
                    </CardFooter>
                  </Card>
                </div>

                <div className="col-lg-8 col-md-6 col-sm-12">
                  <h2 className="about-heart">
                  <FaHeart />
                    <span className="about-name">  Muhammed </span><FaHeart />
                  </h2>
                  <p className="about-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores error quae perferendis architecto quisquam
                    voluptates suscipit rem necessitatibus consequuntur ut
                    soluta praesentium, quidem esse, atque non assumenda,
                    incidunt in deleniti!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default AboutUs;
