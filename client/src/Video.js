import React, { useState } from 'react';
import DeleteButton from './buttons/DeleteButton';
import LikeIcon from './buttons/LikeButton';
import DislikeIcon from './buttons/DisLikeButton';
import YouTubeEmbed from './YouTubeEmbed';
import './Video.css';

function Video({video, deleteVideo}) {

  const [votes, setVotes] = useState(video.rating);
  
  const addLike = () => {
    setVotes(votes + 1);
  }

  const addDisLike = () => {
    setVotes(votes - 1);
  }
  
  return (
    <div className="video-container">
      <p className='video-title'>{video.title}</p>
      <YouTubeEmbed video={video} />
      <div className='video-footer'>
        <div className='vote-container'>  
          <div className='vote_buttons'>
            <LikeIcon vote={addLike}/>
            <p>{votes} votes</p>
            <DislikeIcon vote={addDisLike}/>
          </div>
        </div>
      <DeleteButton deleteVideo={() => {deleteVideo(video.id)}}/>
      </div>
      {video.date &&
      <p>Added {video.date}</p>}
    </div>
  );
}

export default Video