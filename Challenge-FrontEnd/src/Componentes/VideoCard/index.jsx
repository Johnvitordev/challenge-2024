import React from 'react';
import './VideoCard.css';


const VideoCard = ({ title, videoId }) => {
    return (
      <div className="video-card">
        <h3>{title}</h3>
        <div className="video-wrapper">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={title}
            className="iframe-video"
          ></iframe>
        </div>
      </div>
    );
  };

export default VideoCard;