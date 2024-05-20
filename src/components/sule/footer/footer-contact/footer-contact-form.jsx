"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import "./footer-contact-form.scss";
const FooterContactForm = () => {
  return (
    <Container
      className="footer-contact-box"
      
    >
      <h4>Contact Us</h4>
      <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
      <Form className="form ">
        <Form.Group>
          <Form.Control
            className="my-2 bg bg-info-subtle"
            type="text"
            placeholder="Enter your full name"
          />
          <Form.Control.Feedback type="invalid">
            Invalid name
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Control
            className="my-2 bg bg-info-subtle"
            type="email"
            placeholder="Enter your email address"
          />
          <Form.Control.Feedback type="invalid">
            Invalid email
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" size="lg">
          <Form.Control
            className="my-2 bg"
            as="textarea"
            placeholder="Your message"
          />
        </Form.Group>
        <Button variant="btn-primary" type="submit">
          Send Message
        </Button>
      </Form>
    </Container>
  );
};

export default FooterContactForm;
