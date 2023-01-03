import React, { useState } from 'react';
import DeleteButton from './buttons/DeleteButton';
import LikeIcon from './buttons/LikeIcon';
import DislikeIcon from './buttons/DislikeIcon';
import YouTubeEmbed from './YouTubeEmbed';
import './Video.css';
import "bootstrap/dist/css/bootstrap.css";

function Video({video}) {

  const [votes, setVotes] = useState(0);

  const addVote = () => {
    setVotes(votes + 1);
  }
  
  return (
    <div className="video-container">
      <p className='video-title'>{video.title}</p>
      <YouTubeEmbed video={video} />
      <div className='video-footer'>
        <div className='vote-container'>
          <LikeIcon vote={addVote}/>
          <p>{votes} Votes</p>
          <DislikeIcon vote={addVote}/>
        </div>
      <DeleteButton />
      </div>
    </div>
  );
}

export default Video