import React from 'react';
import DeleteButton from './buttons/DeleteButton';
import LikeIcon from './buttons/LikeIcon';
import DislikeIcon from './buttons/DislikeIcon';
import YouTubeEmbed from './YouTubeEmbed';
import './Video.css';
import "bootstrap/dist/css/bootstrap.css";

function Video({video}) {
  
  return (
    <div className="video-container">
      <p className='video-title'>{video.title}</p>
      <YouTubeEmbed video={video} />
      <div className='video-footer'>
        <div className='vote-container'>
          <LikeIcon />
          <p>0 Vote</p>
          <DislikeIcon />
        </div>
      <DeleteButton />
      </div>
    </div>
  );
}

export default Video