"use client";
import { useState } from "react";
import { sendContactForm } from "@/lib/api";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./contact.scss";

const initValues = {
  name: "",
  email: "",
  guests: "",
  subject: "",
  message: "",
};

const initState = { loading: false, error: "", values: initValues };
const Contact = () => {
  return (
    <Container className="contact-box">
      <h2>Contact With Us</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <Form className="form ">
        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Control
                className="col-6-md my-2 input-text"
                type="text"
                placeholder="Enter your full name"
              />
              <Form.Control.Feedback type="invalid">
                Invalid name
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Control
                className="col-6-md my-2 input-text"
                type="email"
                placeholder="Enter your email address"
              />
              <Form.Control.Feedback type="invalid">
                Invalid email
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Select className="col-6-md my-2 input-text">
                <option value="">Number Of Guest</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Select className="col-6-md my-2 input-text">
                <option>I am attending</option>
                <option>All events</option>
                <option>Wedding Ceremony</option>
                <option>Reception Party</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs={12}>

          <Form.Group className="mb-2" size="lg">
            <Form.Control
              className="my-2 input-text"
              as="textarea"
              placeholder="Your message"
            />
          </Form.Group>
          </Col>               
        </Row>
      <Button variant="primary"      type="submit" >
      Send Message
      </Button>
      </Form>
    </Container>
  );
};

export default Contact;
