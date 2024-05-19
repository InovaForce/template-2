"use client";
import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button'; 
import { Container } from 'react-bootstrap';
import './contact.scss';
const FooterContact = () => {
  return ( 
	<Container className="contact-box" style={{ display: 'block', 
				width: 700, 
				padding: 30, 
        justifyContent: 'center',
        }}> 
	<h4>Contact Us</h4> 
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
	<Form className="form "> 
	<Form.Group> 
		<Form.Control className="my-2 bg bg-info-subtle" type="text"
						placeholder="Enter your full name" /> 
    <Form.Control.Feedback type="invalid">
								Invalid name
							</Form.Control.Feedback>        
		</Form.Group> 
		<Form.Group>
		<Form.Control className="my-2 bg bg-info-subtle" type="email"
						placeholder="Enter your email address" />
    <Form.Control.Feedback type="invalid">
								Invalid email
							</Form.Control.Feedback>           

		</Form.Group> 
    <Form.Group className="mb-3" size="lg">		
							
							<Form.Control className="my-2 bg"
								as="textarea"
								placeholder="Your message"
              />
						</Form.Group>
		<Button variant="outline" type="submit"> 
		Send Message 
		</Button> 
	</Form> 
	</Container> 
); 
} 

export default FooterContact;