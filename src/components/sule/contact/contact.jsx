"use client";
import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button'; 
import { Container } from 'react-bootstrap';
import '../contact/contact.scss';
const Contact = () => {
  return ( 
	<Container className="contact-box"> 
	<h3>Lütfen Bizimle Iletisime Gecin(LCV)</h3> 
  <p>Katılım durumuzunuzu bildirmekciçin bizimle iletisime gecin.Teşekkürler</p>
	<Form className="form "> 
	<Form.Group> 
		<Form.Control className="my-2 input-text" type="text"
						placeholder="Ad-Soyad" /> 
    <Form.Control.Feedback type="invalid">
								Invalid name
							</Form.Control.Feedback>        
		</Form.Group> 
		<Form.Group>
		<Form.Control className="my-2 input-text" type="email"
						placeholder="E-mail Adresiniz" />
    <Form.Control.Feedback type="invalid">
								Invalid email
							</Form.Control.Feedback>           

		</Form.Group> 
    <Form.Group>    
    <Form.Select className="my-2 input-text">
        <option value="">Misafir Sayısı</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>

      </Form.Select>
		</Form.Group>
    <Form.Group>
    <Form.Select className="my-2 input-text">
        <option>Katılacağım</option>
        <option>Hepsine Katılacağım</option>
        <option>Sadece kına gecesine katılacağım</option>  
        <option>Sadece düğüne katılacağım</option>     
      </Form.Select>
		</Form.Group>
    <Form.Group className="mb-3" size="lg">		
							
							<Form.Control className="my-2 input-text"
								as="textarea"
								placeholder="Mesajınız"
              />
						</Form.Group>
		<Button variant="primary" type="submit"> 
		Gönder 
		</Button> 
	</Form> 
	</Container> 
); 
} 

export default Contact;