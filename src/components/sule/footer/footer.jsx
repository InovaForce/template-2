"use client"
import React, { useEffect } from 'react'
import './footer.scss'
import Modal from '../footer/footer-contact/modal'

const Footer = () => {
  useEffect(() => {
    const copyrightDate = document.querySelector(".copyright-date");
    let date = new Date();
    copyrightDate.innerText = date.getFullYear();
  }, []); 
  return (    
    <footer className="footer">      
      <span className="copyright">
        &copy;
        <span className="copyright-date"></span>
        <span className="copyright-link">InovaForce<Modal/></span>        
      </span>
    </footer>    
  )
}

export default Footer
