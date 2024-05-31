"use client";
import { useRef, useEffect } from "react";
import "./modal.scss";
import ModalContact from "./modal-contact";
import FirmContactForm from "./firm-contact-form";

const Modal = ({ modalActive, setModalActive }) => {
  const modalRef = useRef();
  const formRef = useRef();
  const buttonRef = useRef();

  const handleModalClick = (event) => {
    if (
      formRef.current && !formRef.current.contains(event.target) &&
      buttonRef.current && event.target !== buttonRef.current
    ) {
      setModalActive(false);
    }
  };

  useEffect(() => {
    if (modalActive) {
      document.addEventListener("mousedown", handleModalClick);
    } else {
      document.removeEventListener("mousedown", handleModalClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleModalClick);
    };
  }, [modalActive]);

  return (
    <div className={`modal-container ${modalActive ? "active" : ""}`} ref={modalRef}>
      <div ref={formRef}>
        <FirmContactForm />
      </div>
      <div ref={buttonRef}>
        <ModalContact />
      </div>
    </div>
  );
};

export default Modal;
