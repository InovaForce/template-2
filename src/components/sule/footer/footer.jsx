"use client";
import { useState, useEffect } from "react";
import "./footer.scss";
import Modal from "../footer/footer-contact/modal";
import MusicPlayer from "./music-player/music-player";

const Footer = () => {
  const [modalActive, setModalActive] = useState(false);
  useEffect(() => {
    const copyrightDate = document.querySelector(".copyright-date");
    let date = new Date();
    copyrightDate.innerText = date.getFullYear();
  }, []);
  const handleModalClick = () => {
    setModalActive(!modalActive);
  };
  return (
    <footer className="footer">
      <Modal modalActive={modalActive} setModalActive={setModalActive} />
      <span className="copyright">
        &copy;
        <span className="copyright-date"></span>
        <span className="copyright-link" onClick={handleModalClick}>
          InovaForce
        </span>
      </span>
      <div className="music-player">
        <div>          
          <MusicPlayer />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
