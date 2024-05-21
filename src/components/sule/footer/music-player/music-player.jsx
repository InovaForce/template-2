
import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import './music-player.scss';

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
      <ReactPlayer
        url={url}
        className="react-player"
        playing={true}
        controls
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default MusicPlayer;
