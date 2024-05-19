"use client";
import { useState } from "react";
import "./model.scss";
import { Button } from "react-bootstrap";
import ModalContact from "./modal-contact";


const Modal = () => {
  const [modalActive, setModalActive] = useState(false);

  const handleModalClick = () => {
    setModalActive(!modalActive);
  };

  return (
    <div>
      <Button className="footer-link" variant="none" onClick={handleModalClick}>
        InovaForce
      </Button>
      {modalActive && (
        <div
          id="modal-container"
          className={`modal-background ${modalActive ? "one" : ""}`}
          onClick={handleModalClick}
        >
          <div id="modal-container" className="one out">
            <div className="modal-background">
              <div className="modal">
                <h2>Contact US</h2>                 
                 <ModalContact />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
