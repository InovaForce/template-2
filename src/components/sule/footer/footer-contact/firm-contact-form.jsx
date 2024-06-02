"use client";
import { useState } from "react";
import { sendContactForm } from "@/lib/api";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./firm-contact-form.scss";

const initValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const initState = { loading: false, error: "", values: initValues };
const FirmContactForm = () => {
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const { values, loading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    console.log(values);
    setState((prev) => ({
      ...prev,
      loading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      alert("Your message has been sent successfully");
      
    } catch (error) {
      setState((prev) => ({
        ...prev,
        loading: false,
        error: error.message,
      }));
    }
  };
  return (
    <div className="firm-contact-div">

      <Container className="firm-contact-box">
        <h1>Bizimle İletişime Geçin</h1>
        {error && <p>{error}</p>}
        <Form className="firm-form ">
          <Row>
            <Col md={6}>
              <Form.Group>
                <Form.Control
                  className="my-2 input-text"
                  name="name"
                  type="text"
                  placeholder="Adınızı ve soyadınızı giriniz."
                  value={values.name}
                  onChange={handleChange}
                  onBlur={onBlur}
                  isInvalid={touched.name && !values.name}
                />
                <Form.Control.Feedback type="invalid">
                  {touched.name && !values.name && "Name is required"}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Control
                  className="my-2 input-text"
                  name="email"
                  type="email"
                  placeholder="Mail adresinizi giriniz."
                  value={values.email}
                  onChange={handleChange}
                  onBlur={onBlur}
                  isInvalid={touched.email && !values.email}
                />
                <Form.Control.Feedback type="invalid">
                  {touched.email && !values.email && "Email is required"}
                </Form.Control.Feedback> 
              </Form.Group>
            </Col>
            <Col xs={12}>
              <Form.Group className="mb-3" size="lg">
                <Form.Control
                  className="my-2 input-text"
                  as="textarea"
                  placeholder="Mesajınız"
                  name="message"
                  rows={4}
                  value={values.message}
                  onChange={handleChange}
                  onBlur={onBlur}
                />
                <Form.Control.Feedback type="invalid">
                  {touched.message && !values.message && "Message is required"}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Button
            className="firm-btn-primary"
            variant="primary"
            type="submit"
            disabled={
              !values.name ||
              !values.email ||
              !values.message
            }
            onClick={onSubmit}
          >
            Gönder
          </Button>
        </Form>
      </Container>

    </div>
  );
};

export default FirmContactForm;
