import React, { useEffect, useState } from 'react';
import DeleteButton from './buttons/DeleteButton';
import LikeIcon from './buttons/LikeIcon';
import DislikeIcon from './buttons/DislikeIcon';
import YouTubeEmbed from './YouTubeEmbed';
import './Video.css';
import "bootstrap/dist/css/bootstrap.css";

function Video({video, deleteVideo}) {

  const [likes, setLikes] = useState(0);
  const [disLikes, setDisLikes] = useState(0);
  const [votes, setVotes] = useState(0);

  const addLike = () => {
    setLikes(likes + 1);
  }

  const addDisLike = () => {
    setDisLikes(disLikes + 1);
  }

  useEffect(() => {
    setVotes(likes + disLikes);
  }, [likes, disLikes]);
  
  return (
    <div className="video-container">
      <p className='video-title'>{video.title}</p>
      <YouTubeEmbed video={video} />
      <div className='video-footer'>
        <div className='vote-container'>
          <p>{likes}</p>  
          <LikeIcon vote={addLike}/>
          <p>{votes} votes</p>
          <DislikeIcon vote={addDisLike}/>
          <p>{disLikes}</p>
        </div>
      <DeleteButton deleteVideo={() => {deleteVideo(video.id)}}/>
      </div>
    </div>
  );
}

export default Video