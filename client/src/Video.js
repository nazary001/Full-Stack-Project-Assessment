import React, { useState } from 'react';
import DeleteButton from './buttons/DeleteButton';
import LikeIcon from './buttons/LikeIcon';
import DislikeIcon from './buttons/DislikeIcon';
import YouTubeEmbed from './YouTubeEmbed';
import './Video.css';

function Video({video, deleteVideo}) {

  const [likes, setLikes] = useState(Math.round(Math.random() * 10000));
  const [disLikes, setDisLikes] = useState(Math.round(Math.random() * 1000));

  const addLike = () => {
    setLikes(likes + 1);
  }

  const addDisLike = () => {
    setDisLikes(disLikes + 1);
  }
  
  return (
    <div className="video-container">
      <p className='video-title'>{video.title}</p>
      <YouTubeEmbed video={video} />
      <div className='video-footer'>
        <div className='vote-container'>
          <p>{likes}</p>  
          <div className='vote_buttons'>
            <LikeIcon vote={addLike}/>
            <DislikeIcon vote={addDisLike}/>
          </div>
          <p>{disLikes}</p>
        </div>
      <DeleteButton deleteVideo={() => {deleteVideo(video.id)}}/>
      </div>
    </div>
  );
}

export default Video