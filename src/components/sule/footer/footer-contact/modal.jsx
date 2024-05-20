"use client";
import { useState } from "react";
import "./modal.scss"; 
import { Button } from "react-bootstrap";
import ModalContact from "./modal-contact";
import FooterContactForm from "./footer-contact-form";

const Modal = () => {
  const [modalActive, setModalActive] = useState(false);

  const handleModalClick = () => {
    setModalActive(!modalActive);
  };

  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={`modal-container ${modalActive ? "active" : ""}`}>
      <Button
        className="copyright-link"
        variant="primary"      
        onClick={handleModalClick}
      >
        Open Modal
      </Button>
      {modalActive && (
        <div
          className="modal-background"
          onClick={handleModalClick}
        >
          <div className="modal" onClick={handleModalContentClick}>
            <h2>Contact Us</h2>
            <FooterContactForm />
            <ModalContact /> 
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
