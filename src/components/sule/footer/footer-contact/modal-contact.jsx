"use client";
import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import contactData from '../../../../data/contact-data.json';

const ModalContact = () => {
  const [contact, setContact] = useState({});

  useEffect(() => {
    if (contactData && contactData.contact) {
      setContact(contactData.contact);
    }
  }, []);

  return (
    <Nav>
      {contact.phone1 && (
        <Nav.Link href={`tel:${contact.phone1}`}>{contact.phone1}</Nav.Link>
      )}
      {contact.phone2 && (
        <Nav.Link href={`tel:${contact.phone2}`}>{contact.phone2}</Nav.Link>
      )}
      {contact.email && (
        <Nav.Link href={`mailto:${contact.email}`}>{contact.email}</Nav.Link>
      )}
      {contact.mapURL && contact.address && (
        <Nav.Link href={contact.mapURL} target="_blank">
          {contact.address}
        </Nav.Link>
      )}
    </Nav>
  );
};

export default ModalContact;
