"use client";
import { useState } from "react";
import { sendContactForm } from "@/lib/api";
import { Button, Container, Form } from "react-bootstrap";
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
    <Container
      className="contact-box"
      style={{
        display: "block",
        width: 700,
        padding: 30,
        justifyContent: "center",
      }}
    >
      <h4>Contact With Us</h4>
      {error && <p>{error}</p>}
      <Form className="form ">
        <Form.Group>
          <Form.Control
            className="my-2 input-text"
            name="name"
            type="text"
            placeholder="Enter your full name"
            value={values.name}
            onChange={handleChange}
            onBlur={onBlur}
            isInvalid={touched.name && !values.name}
          />
          <Form.Control.Feedback type="invalid">
            {touched.name && !values.name && "Name is required"}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Control
            className="my-2 input-text"
            name="email"
            type="email"
            placeholder="Enter your email address"
            value={values.email}
            onChange={handleChange}
            onBlur={onBlur}
            isInvalid={touched.email && !values.email}
          />
          <Form.Control.Feedback type="invalid">
            {touched.email && !values.email && "Email is required"}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Select
            name="guests"
            className="my-2 input-text"
            value={values.guests}
            onChange={handleChange}
            onBlur={onBlur}
            isInvalid={touched.guests && !values.guests}
          >
            <option value="">Number Of Guest</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            {touched.guests && !values.guests && "Number Of Guest is required"}
          </Form.Control.Feedback>
        </Form.Group>
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
            <option value="I am attending">I am attending</option>
            <option value="All events">All events</option>
            <option value="Wedding Ceremony">Wedding Ceremony</option>
            <option value="Reception Party">Reception Party</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            {touched.subject && !values.subject && "Subject is required"}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" size="lg">
          <Form.Control
            className="my-2 input-text"
            as="textarea"
            placeholder="Your message"
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
        <Button
          variant="primary"
          type="submit"
          disabled={
            !values.name || !values.email || !values.subject || !values.message
          }
          onClick={onSubmit}
        >
          Send Message
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;
