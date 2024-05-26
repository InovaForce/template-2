"use client";
import "./modal.scss";
import { Button } from "react-bootstrap";
import ModalContact from "./modal-contact";
import FirmContactForm from "./firm-contact-form";

const Modal = ({ modalActive, setModalActive }) => {
  const handleModalClick = () => {
    setModalActive(!modalActive);
  };

  return (
    <div
      className={`modal-container ${modalActive ? "active" : ""}`}
      onClick={handleModalClick}
    >
      <FirmContactForm />
      <ModalContact />
    </div>
   
  );
};

export default Modal;
