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
      alert("Mesajınız başarılı bir şekilde gönderildi.");
      
    } catch (error) {
      setState((prev) => ({
        ...prev,
        loading: false,
        error: error.message,
      }));
    }
  };
  return (
    <div className="contact-div">

      <Container className="contact-box">
        <h1 className="d-flex flex-wrap justify-content-center align-items-center text-center">Katılım durumunuzu bildirmenizi rica ederiz.</h1>
        {error && <p>{error}</p>}
        <Form className="form ">
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
            <Col md={6}>
              <Form.Group>
                <Form.Select
                  name="guests"
                  className="my-2 input-text"
                  value={values.guests}
                  onChange={handleChange}
                  onBlur={onBlur}
                  isInvalid={touched.guests && !values.guests}
                >
                  <option value="">Misafir sayısı</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {touched.guests &&
                    !values.guests &&
                    "Number Of Guest is required"}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Select
                  name="subject"
                  className="my-2 input-text"
                  value={values.subject}
                  onChange={handleChange}
                  onBlur={onBlur}
                  isInvalid={touched.subject && !values.subject}
                >
                  <option value="">Subject</option>
                  <option value="I am attending">Katılacağım</option>
                  <option value="All events">Hepsi</option>
                  <option value="Henna night">Kına Gesesi</option>
                  <option value="Wedding ceremony">Nikah Töreni</option>
                  <option value="Wedding dinner">Düğün Yemeği</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {touched.subject && !values.subject && "Subject is required"}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col xs={12}>
              <Form.Group className="mb-3" size="lg">
                <Form.Control
                  className="my-2 input-text"
                  as="textarea"
                  placeholder="Mesajınızı yazın..."
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
            className="form-btn-primary"
            variant="primary"
            type="submit"
            disabled={
              !values.name ||
              /* !values.email || */
              !values.subject ||
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

export default Contact;
