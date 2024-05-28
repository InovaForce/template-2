"use client";
import React, { useState, useEffect, useRef } from "react";
import { MdOutlineMusicNote, MdOutlineMusicOff } from "react-icons/md";
import "./music-player.scss";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false); // Başlangıçta çalmıyor
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current === null) {
      audioRef.current = new Audio("/music/bossa-in-my-heart-13187.mp3");
      audioRef.current.loop = true; // Müziği döngüye al
    }

    const playAudio = (e) => {
      // Eğer tıklanan öğe 'player-wrapper' içinde ise erken çıkış yap
      if (e.target.closest(".player-wrapper")) return;
      
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(error => {
          console.error("Ses oynatılamadı:", error);
        });
      }
    };

    // Kullanıcı etkileşimini bekle
    window.addEventListener('click', playAudio, { once: true });

    return () => {
      window.removeEventListener('click', playAudio);
    };
  }, []);

  const handlePlayPauseButton = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().catch(error => {
          console.error("Ses oynatılamadı:", error);
        });
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="player-wrapper">
      <button onClick={handlePlayPauseButton}>
        {isPlaying ? <MdOutlineMusicOff className="sound-icon" /> : <MdOutlineMusicNote className="sound-icon" />}
      </button>
    </div>
  );
};

export default MusicPlayer;
