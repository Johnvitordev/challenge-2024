import React from 'react';
import VideoCard from '../VideoCard/index.jsx';
import './Overview.css';



const Overview = () => {
  return (
    <div className="overview">
      <div className="video-grid">
        <VideoCard className="title" title="Video Pitch 1" videoId="M-HbX4f1Wzg" />
        <VideoCard className="title" title="Video Pitch 2" videoId="u6hCM-a1vLA" />{/* aqui adiciona o ID do video no yt para poder assitir na pagina */}
      </div>
    </div>
  );
};

export default Overview;