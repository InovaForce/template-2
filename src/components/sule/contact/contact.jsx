"use client";
import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button'; 
import { Container } from 'react-bootstrap';
import '../contact/contact.scss';
const Contact = () => {
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  return ( 
	<Container className="contact-box" style={{ display: 'block', 
				width: 700, 
				padding: 30, 
        justifyContent: 'center',
        }}> 
	<h4>Contact With Us</h4> 
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
    <Form.Group>    
    <Form.Select className="my-2 bg bg-info-subtle">
        <option value="">Number Of Guest</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>

      </Form.Select>
		</Form.Group>
    <Form.Group>
    <Form.Select className="my-2 bg bg-info-subtle">
        <option>I am attending</option>
        <option>All events</option>
        <option>Wedding Ceremony</option>  
        <option>Reception Party</option>     
      </Form.Select>
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

export default Contact;