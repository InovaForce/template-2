
import React, { useState, useEffect } from 'react';



const MusicPlayer = ({ url }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="player-wrapper">
     
    </div>
  );
};

export default MusicPlayer;
