"use client"
import React, { useEffect } from 'react'
import './footer.scss'
import Modal from '../footer/footer-contact/modal'
import MusicPlayer from './background-player/music-player'

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
      <div className="music-player">
          <div>
            <link rel="icon" href="/favicon.ico" />
            <MusicPlayer url="/music/bossa-in-my-heart.mp3" />
            </div>   
        </div>

    </footer>    
  )
}

export default Footer
